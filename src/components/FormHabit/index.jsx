import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

import jwt_decode from "jwt-decode";

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

  const token = JSON.parse(localStorage.getItem("token")) || "";

  const decoded = jwt_decode(token);

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const handleForm = (data) => {
    api
      .post(
        "/habits/",
        {
          ...data,
          achieved: false,
          how_much_achieved: 30,
          user: decoded.user_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log("erro apresentado", error));
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
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Dificuldade do Hábito"
          size="small"
          color="primary"
          {...register("difficulty")}
          error={!!errors.difficulty}
          helperText={errors.difficulty?.message}
        />
      </div>
      <div>
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
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default FormHabit;
