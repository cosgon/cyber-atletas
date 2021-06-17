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
    baseURL: "https://kabit-api.herokuapp.com",
  });

  const { token } = useLogin();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [oneGoal, setOneGoal] = useState({});

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

  const deleteActivity = (id) => {
    setLoading(true);
    api
      .delete(`/activities/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getActivities(selected);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Nao foi possivel deletar");
      });
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
        setGoals(response.data.goals);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const deleteGoal = (id) => {
    setLoading(true);
    api
      .delete(`/goals/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGoals(selected);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Nao foi possivel deletar");
      });
  };

  const getGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => setGroups(data))
      .catch(() => toast.error("Erro ao buscar grupos!"));
  };

  const updateGoals = (id) => {
    setLoading(true);
    api
      .patch(
        `/goals/${id}/`,
        { how_much_achieved: counter },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        getGoals(selected);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Nao foi possivel Atualizar");
      });
  };

  const getOneGoal = (id) => {
    setLoading(true);
    api
      .get(`groups/${id}/`)
      .then((response) => {
        setOneGoal(response.data.goals.how_much_achieved);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <GroupsContext.Provider
      value={{
        getOneGoal,
        counter,
        setCounter,
        updateGoals,
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
        deleteActivity,
        deleteGoal,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
