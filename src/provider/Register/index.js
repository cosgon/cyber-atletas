import { createContext,useContext} from 'react';
import axios from "axios";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {

   const registerUser = async(data) =>{
       await axios 
        .post("https://kabit-api.herokuapp.com/users/", data)
        .catch((e) => console.log(e));
   }

        return (
           <RegisterContext.Provider value={{registerUser}}> {children} </RegisterContext.Provider>
	); 
};

export const useRegister = () => useContext(RegisterContext);