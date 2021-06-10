import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useGroups } from "../../provider/groups";
import useStyles from "./style";

const Groups = () => {
  const { groups } = useGroups();

  const classes = useStyles();

  return (
    <>
      {groups.map((group) => (
        <Card className={classes.card}>
          <CardActionArea className={classes.contentArea}>
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
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default Groups;
