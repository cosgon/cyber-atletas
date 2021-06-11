import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

const Groups = () => {
  const [groups, setGroups] = useState([]);

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const token = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setGroups(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      {groups.map((group) => (
        <div className="card" key={group.id}>
          <h2 className="title">
            #{group.id} - {group.name}
          </h2>
          <p className="text">{group.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Groups;
