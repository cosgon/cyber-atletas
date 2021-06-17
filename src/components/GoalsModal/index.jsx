import { Modal, Button, CardContent, Typography } from "@material-ui/core/";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";

import useStyles from "./Styles";

import { useState } from "react";

import FormGoals from "../FormGoals";

const GoalsModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button className={classes.add} type="button" onClick={handleOpen}>
        <CardContent>
          <Typography variant="h4">Adicionar meta</Typography>
        </CardContent>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid className={classes.paper}>
            <FormGoals />
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  );
};
export default GoalsModal;
