import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useGroups } from "../../provider/Groups";
import useStyles from "./style";
import axios from "axios";
import { useState } from "react";
import GroupsModal from "../GroupsModal";

const Groups = () => {
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const { groups, setSelected, getActivities, subGroup, selected, getGroups } =
    useGroups();

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  const toPage = (id) => {
    setSelected(id);
    localStorage.setItem("@CyberAtletas/SelectedGroupId", JSON.stringify(id));
    history.push("/group");
  };
  return loading ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <>
      <Grid className={classes.groupsModal}>
        <GroupsModal api={api} setLoading={setLoading} />
      </Grid>
      <header className={classes.titleTest}>
        <h1 className={classes.h1}>Grupos:</h1>
      </header>
      <ul>
      {groups.map((group) => (
        <li className={classes.test}>
        <Card key={group.id} className={classes.card}>
          <Typography className={classes.title}>
            #{group.id} - {group.name}
          </Typography>

          <Typography className={classes.description}>
            {group.description}
          </Typography>
          <Button
            onClick={() => {
              getActivities(group.id);
              toPage(group.id);
            }}
            className={classes.button}
          >
            Mais detalhes
          </Button>
          <Button
            className={classes.button}
            onClick={() => {
              subGroup(group.id);
              getGroups();
              history.push("/dashboard");
            }}
          >
            Desinscrever-se
          </Button>
        </Card>
        </li>
      ))}
      </ul>
      <Card
        className={classes.card}
        onClick={() => history.push("/AllGroupsPage")}
      >
        <CardActionArea className={classes.contentArea}>
          <CardContent>
            <Typography>Adicionar um grupo</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Groups;
