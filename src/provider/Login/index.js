import { createContext, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const LoginContext = createContext();

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});
export const LoginProvider = ({ children }) => {
  const history = useHistory();

  const loginUser = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { user_id } = jwt_decode(response.data.access);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        localStorage.setItem("user_id", JSON.stringify(user_id));
        history.push("/dashboard");
      })
      .catch((e) => {
        toast.error("Verifique seu email ou senha!")
      });
  }

  return (
    <LoginContext.Provider value={{ loginUser }}> {children} </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
