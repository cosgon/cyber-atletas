import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../Login";
import axios from "axios";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const { token } = useLogin();

  const getGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setGroups(data))
      .catch(() => toast.error("Erro ao buscar grupos!"));
  };

  return (
    <GroupsContext.Provider
      value={{ groups, setGroups, getGroups, selected, setSelected }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
