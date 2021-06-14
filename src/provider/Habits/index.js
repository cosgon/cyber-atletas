import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [decoded, setDecoded] = useState({});
  const { reset } = useForm();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const token = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {
    if (token) {
      setDecoded(jwt_decode(token));
    }
    handleFormGet();
  }, []);

  const handleFormPost = (data) => {
    console.log("api", data);
    api
      .post(
        "/habits/",
        {
          ...data,
          achieved: false,
          how_much_achieved: 30,
          user: decoded.user_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => handleFormGet())
      .then(() => toast.success("Hábito Cadastrado"))
      .catch((error) => console.log("erro apresentado", error));
    reset();
  };

  const handleFormGet = () => {
    api
      .get("habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))

      .catch((error) => console.log("erro apresentado", error));

    console.log(habits);
  };

  return (
    <HabitsContext.Provider value={{ habits, handleFormPost, handleFormGet }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
