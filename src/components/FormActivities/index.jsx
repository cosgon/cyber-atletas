import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useLogin } from "../../provider/Login";
import { useGroups } from "../../provider/Groups";

const FormActiveties = () => {
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { token } = useLogin();
  const { getActivities, selected } = useGroups();
  const handleForm = (data) => {
    api
      .post(
        "/activities/",
        { ...data, realization_time: new Date(), group: selected },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        getActivities(selected);
      });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Nome da Atividade"
          size="small"
          color="primary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
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

export default FormActiveties;
