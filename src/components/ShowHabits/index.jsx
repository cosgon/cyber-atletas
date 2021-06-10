import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

const ShowHabits = () => {
  const [habits, setHabits] = useState();
  const api = axios.create({ baseURL: "https://kabit-api.herokuapp.com/" });

  const token = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {
    if (habits === undefined) {
      api
        .get("habits/personal/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setHabits(response.data));
    }
  }, [habits]);
  console.log(habits);
  return (
    <div>
      {habits === undefined ? (
        <CircularProgress />
      ) : (
        habits.map((habit) => (
          <div key={habit.id}>
            <h2>{habit.title}</h2>
            <p>{habit.category}</p>
            <p>{habit.difficulty}</p>
            <p>{habit.frequency}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowHabits;
