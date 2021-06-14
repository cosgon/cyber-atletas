import { createContext, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const LoginContext = createContext();

const notifyError = (error) =>
  toast(error, {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});

export const LoginProvider = ({ children }) => {

  const loginUser = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { user_id } = jwt_decode(response.data.access);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        localStorage.setItem("user_id", JSON.stringify(user_id));

      })
      .catch((e) => {
        notifyError(e.response.data.detail);
      });
  }

  return (
    <LoginContext.Provider value={{ loginUser }}> {children} </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
