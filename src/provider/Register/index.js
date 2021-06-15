import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {

   const registerUser = (data) => {
      axios
         .post("https://kabit-api.herokuapp.com/users/", data)
         .then(() => toast.success("Cadastrado com sucesso!"))
         .catch((e) => toast.error(`Erro ao cadastrar: ${e}!`))
   }

   return (
      <RegisterContext.Provider value={{ registerUser }}> {children} </RegisterContext.Provider>
   );
};

export const useRegister = () => useContext(RegisterContext);