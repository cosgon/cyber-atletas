import { useGroups } from "../../provider/Groups";
import { useLogin } from "../../provider/Login/";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import axios from "axios";

import { useForm } from "react-hook-form";

import useStyles from "./style";

const FormGoals = () => {
  const classes = useStyles();

  const { token } = useLogin();
  const { selected, getGoals } = useGroups();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleForm = (data) => {
    api
      .post(
        "/goals/",
        { ...data, how_much_achieved: 0, group: selected },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        getGoals(selected);
        toast.success("Meta Cadastrada");
      })
      .catch(() => toast.error("Erro ao cadastrar"));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Nome da Meta"
          size="small"
          color="primary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      </div>

      <div>
        <FormControl className={classes.select}>
          <InputLabel id="demo-controlled-open-select-label">
            Dificuldade da Meta
          </InputLabel>
          <Select
            defaultValue={"Médio"}
            label="Dificuldade "
            {...register("difficulty")}
          >
            <option className={classes.option} aria-label="None" value="" />
            <option className={classes.option} value={"Fácil"}>
              Fácil
            </option>
            <option className={classes.option} value={"Médio"}>
              Médio
            </option>
            <option className={classes.option} value={"Difícil"}>
              Difícil
            </option>
          </Select>
        </FormControl>
      </div>

      <br />
      <div>
        <Button
          className={classes.subscribeButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default FormGoals;
