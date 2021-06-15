import CardAllGroupPages from "../../components/CardAllGroupPages";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const AllGroupsPages = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPoint]);

  return (
    <div>
      <CardAllGroupPages
        previousPage={previousPage}
        setEndPoint={setEndPoint}
        setLoading={setLoading}
        allGroups={allGroups}
        nextPage={nextPage}
        loading={loading}
        api={api}
      />
    </div>
  );
};
export default AllGroupsPages;
