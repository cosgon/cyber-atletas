import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const token = JSON.parse(localStorage.getItem("token")) || "";

  const getGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups(response.data);
      });
  };

  useEffect(() => {
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GroupsContext.Provider
      value={{ groups, setGroups, getGroups, selected, setSelected }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
