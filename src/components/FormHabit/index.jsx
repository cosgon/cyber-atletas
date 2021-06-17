import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { useHabits } from "../../provider/Habits";

import useStyles from "./Styles";

const FormHabit = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
    frequency: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleFormPost } = useHabits();

  const classes = useStyles();

  const handleForm = (data) => {
    handleFormPost(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Titulo do Hábito"
          size="small"
          color="primary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      </div>

      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Categoria do Hábito"
          size="small"
          color="primary"
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
      </div>

      <div>
        <div>
          <FormControl className={classes.select}>
            <InputLabel id="demo-controlled-open-select-label">
              Dificuldade do Hábito
            </InputLabel>
            <Select
              name="difficulty"
              label="Dificuldade "
              className={classes.select}
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
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Frequência do Hábito"
          size="small"
          color="primary"
          {...register("frequency")}
          error={!!errors.frequency}
          helperText={errors.frequency?.message}
        />
      </div>
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

export default FormHabit;
