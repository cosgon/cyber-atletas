import axios from "axios";
import { useEffect, useState } from "react";
import CardGroupPage from "../../components/CardGroupPage";
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
  return <CardGroupPage group={group}></CardGroupPage>;
};
export default GroupPage;
