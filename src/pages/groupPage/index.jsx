import CardGroupPages from "../../components/CardGroupPages";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const GroupPage = () => {
  const api = axios.create({ baseURL: "https://kabit-api.herokuapp.com" });
  const [previousPage, setPreviousPage] = useState("");
  const [endPoint, setEndPoint] = useState("/groups/");
  const [allGroups, setAllGroups] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(endPoint).then((response) => {
      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
      setAllGroups(response.data.results);
      setLoading(false);
    });
  }, [endPoint]);

  return (
    <div>
      <CardGroupPages
        previousPage={previousPage}
        setEndPoint={setEndPoint}
        allGroups={allGroups}
        nextPage={nextPage}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};
export default GroupPage;
