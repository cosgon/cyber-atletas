import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormPost = (data) => {
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
      .then(() => {
        handleFormGet();
        toast.success("Hábito Cadastrado");
      })
      .catch((error) => console.log("erro apresentado", error));
    reset();
  };

  const handleFormGet = () => {
    setLoading(true);
    api
      .get("habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log("erro apresentado", error);
        setLoading(false);
      });
  };

  console.log(loading);

  return (
    <HabitsContext.Provider
      value={{ loading, habits, handleFormPost, handleFormGet }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
