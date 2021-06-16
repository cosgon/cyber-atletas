import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const LoginContext = createContext();

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
});

export const LoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@CyberAtletas/Id")) || 0
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@CyberAtletas/Token")) || ""
  );
  const history = useHistory();
  useEffect(() => {}, []);

  const loginUser = (data) => {
    api
      .post("/sessions/", data)
      .then(({ data }) => {
        const { user_id } = jwt_decode(data.access);
        setToken(data.access);
        setUserId(user_id);
        localStorage.setItem(
          "@CyberAtletas/Token",
          JSON.stringify(data.access)
        );
        localStorage.setItem("@CyberAtletas/Id", JSON.stringify(user_id));
        history.push("/dashboard");
      })
      .catch(() => {
        toast.error("Verifique seu email ou senha!");
      });
  };

  return (
    <LoginContext.Provider value={{ loginUser, userId, token }}>
      {" "}
      {children}{" "}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
