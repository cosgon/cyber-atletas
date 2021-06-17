import { createContext, useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLogin } from "../Login";
import axios from "axios";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { reset } = useForm();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const { token, userId } = useLogin();
  const handleFormPost = (data) => {
    setLoading(true);
    api
      .post(
        "/habits/",
        {
          ...data,
          achieved: false,
          how_much_achieved: 30,
          user: userId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        handleFormGet();
        toast.success("Hábito Cadastrado");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Erro ao salvar Hábito");
        setLoading(false);
      });
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

      .catch(() => {
        toast.error("Erro ao buscar Hábito");
        setLoading(false);
      });
  };

  const deletehabits = (id) => {
    setLoading(true);
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        handleFormGet();
        toast.error("Hábito deletado");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Nao foi possivel deletar");
      });
  };

  return (
    <HabitsContext.Provider
      value={{ loading, habits, handleFormPost, handleFormGet, deletehabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
