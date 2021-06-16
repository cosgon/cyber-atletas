import { createContext, useContext } from 'react';
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
import axios from "axios";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
   const history = useHistory();

   const registerUser = (data) => {
      axios
         .post("https://kabit-api.herokuapp.com/users/", data)
         .then(() => {
            history.push("/PageLogin");
            toast.success("Cadastrado com sucesso!")
         })
         .catch((e) => toast.error(`Usuario ou email ja cadastrado!`));
   }

   return (
      <RegisterContext.Provider value={{ registerUser }}> {children} </RegisterContext.Provider>
   );
};

export const useRegister = () => useContext(RegisterContext);