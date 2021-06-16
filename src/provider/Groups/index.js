import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../Login";
import axios from "axios";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("@CyberAtletas/SelectedGroupId"))
  );
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const { token } = useLogin();
  const [loading, setLoading] = useState(false);

  const subGroup = (id) => {
    setLoading(true);
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups();
        setLoading(false);
      })
      .catch((e) => console.log("Exclude " + e));
  };

  const getActivities = (id) => {
    setLoading(true);
    api
      .get(`groups/${id}/`)
      .then((response) => {
        setActivities(response.data.activities);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const getGoals = (id) => {
    setLoading(true);
    api
      .get(`groups/${id}/`)
      .then((response) => {
        setActivities(response.data.goals);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

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
      value={{
        goals,
        getGoals,
        getActivities,
        loading,
        activities,
        groups,
        setGroups,
        getGroups,
        selected,
        setSelected,
        subGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
