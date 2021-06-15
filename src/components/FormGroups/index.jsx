import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";

import useStyles from "./Styles";
import { useGroups } from "../../provider/Groups";

const FormGroups = ({ api, setLoading }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  const { getGroups } = useGroups();

  const token = JSON.parse(localStorage.getItem("token")) || "";

  const handleForm = (data) => {
    setLoading(true);
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups();
        setLoading(false);
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
          label="Nome do Grupo"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>

      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Descrição"
          size="small"
          color="primary"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
      </div>

      <div>
        <TextField
          required
          margin="normal"
          variant="outlined"
          label="Categoria"
          size="small"
          color="primary"
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
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

export default FormGroups;
