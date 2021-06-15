import { Modal, Fab } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import useStyles from "./Styles";

import { useState } from "react";

import FormGroups from "../FormGroups";

const GroupsModal = ({ api, setLoading }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        className={classes.add}
        type="button"
        color="primary"
        aria-label="Add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
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
          <div className={classes.paper}>
            <FormGroups api={api} setLoading={setLoading} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default GroupsModal;
