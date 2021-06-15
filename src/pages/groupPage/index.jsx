import axios from "axios";
import { useEffect, useState } from "react";
import CardDashboard from "../../components/CardGroupPage";
import CardGroupPages from "../../components/CardAllGroupPages";
import { useGroups } from "../../provider/Groups";

const GroupPage = () => {
  const api = axios.create({ baseURL: "https://kabit-api.herokuapp.com" });
  const { selected } = useGroups();
  const [group, setGroup] = useState({});
  useEffect(() => {
    api.get(`/groups/${selected}/`).then(({ data }) => {
      setGroup(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <CardDashboard group={group}></CardDashboard>;
};
export default GroupPage;
