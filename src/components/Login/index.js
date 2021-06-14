import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useLogin } from '../../provider/Login';
import { Button, TextField } from "@material-ui/core";
import useStyles from './style.js';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Login = () => {

    const classes = useStyles();
    const history = useHistory();
    const { loginUser } = useLogin();

    const schema = yup.object().shape({
        username: yup.string().required("Campo Obrigatório"),
        password: yup.string()
            .required("Campo Obrigatório")
            .min(8, "Mínimo de 8 dígitos")
            .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
            ),
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const handleMyForm = (data) => {
        console.log(data);
        loginUser(data);
        reset();
        history.push("/dashboard");
    };

    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit(handleMyForm)}>
                <img className={classes.img} src="https://www.imagemhost.com.br/images/2021/06/14/Paleta-de-cores-1.png" alt="logomarca" border="0" />
                <div>
                    <TextField
                        margin="normal"
                        variant="outlined"
                        label="Username"
                        size="small"
                        color="secondary"
                        placeholder="Username"
                        {...register("username")} />
                    <p>{errors.username?.message}</p>
                </div>
                <div>
                    <div>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            label="Senha"
                            size="small"
                            color="secondary"
                            type="password"
                            className="inputSenha"
                            placeholder="Senha"
                            {...register("password")} />
                        <p>{errors.password?.message}</p>
                    </div>
                </div>
                <div >
                    <Button type="submit"
                        variant="contained"
                        size="large"
                        className={classes.button}
                        endIcon={<ArrowRightAltIcon />}> Logar</Button>
                </div>
                <Link className={classes.link} to="/"> Home</Link>
            </form>
        </>
    );
}
export default Login;
