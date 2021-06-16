import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import { useLogin } from '../../provider/Login';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHabits } from "../../provider/Habits";
import { useGroups } from "../../provider/Groups";
import { ToastContainer } from "react-toastify";
import useStyles, { theme, CssTextField } from './style.js';
import * as yup from "yup";
import { ThemeProvider } from '@material-ui/core/styles';


const Login = () => {

    const classes = useStyles();
    const { loginUser } = useLogin();

    const schema = yup.object().shape({
        username: yup.string().required("Campo Obrigatório"),
        password: yup
            .string()
            .required("Campo Obrigatório")
            .min(8, "Mínimo de 8 dígitos")
            .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
            ),
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const { handleFormGet } = useHabits();
    const { getGroups } = useGroups();

    const handleMyForm = (data) => {
        handleFormGet();
        getGroups();
        loginUser(data);
        reset();
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form className={classes.root} onSubmit={handleSubmit(handleMyForm)}>

                <img className={classes.img} src="https://www.imagemhost.com.br/images/2021/06/14/Paleta-de-cores-1.png" alt="logomarca" border="0" />
                <div className={classes.box}>
                    <CssTextField
                        margin="normal"
                        variant="outlined"
                        label="Usuário"
                        size="small"
                        color="primary"
                        {...register("username")} />
                    <p>{errors.username?.message}</p>
                </div>
                <div className={classes.box}>
                    <CssTextField
                        margin="normal"
                        variant="outlined"
                        label="Senha"
                        size="small"
                        color="primary"
                        type="password"
                        className="inputSenha"
                        {...register("password")} />
                    <p>{errors.password?.message}</p>
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
        </ThemeProvider>
    );
}
export default Login;
