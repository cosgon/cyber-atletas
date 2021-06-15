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
import { useGroups } from "../../provider/groups";
import useStyles from "./style";
import axios from "axios";
import { useState } from "react";
import GroupsModal from "../GroupsModal";

const Groups = () => {
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const { groups, setSelected } = useGroups();

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  // const subGroup = (id) => {
  //   setLoading(true);
  //   api
  //     .delete(`/groups/${id}/unsubscribe/`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then(() => {
  //       getGroups();
  //       setLoading(false);
  //     })
  //     .catch((e) => console.log("Exclude " + e));
  // };

  const toPage = (id) => {
    setSelected(id);
    history.push("/groupinfo");
  };

  return loading ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <>
      <Grid direction="row" justify="flex-end" className={classes.groupsModal}>
        <GroupsModal api={api} setLoading={setLoading} />
      </Grid>

      <h1 className={classes.h1}>Grupos:</h1>

      {groups.map((group) => (
        <Card key={group.id} className={classes.card} loading>
          <CardContent>
            <Typography className={classes.title}>
              #{group.id} - {group.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className={classes.description}>
              {group.description}
            </Typography>
          </CardContent>
          <Button onClick={() => toPage(group.id)}>Sair do Grupo</Button>
        </Card>
      ))}
      <Card className={classes.card} onClick={() => history.push("/groups")}>
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
