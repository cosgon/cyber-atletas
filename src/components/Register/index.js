import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '../../provider/Register';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import useStyles from './style.js';
import * as yup from "yup";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FE6B8B',
        },
        secondary: {
            main: '#faed26',
        },
    },
});

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#faed26',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
        },
    },
})(TextField);

const Register = () => {

    const classes = useStyles();
    const { registerUser } = useRegister();
    const history = useHistory();

    const schema = yup.object().shape({
        username: yup
            .string()
            .required("Campo é obrigatório")
            .max(18, "Limite máximo de 18 caracteres"),
        email: yup
            .string()
            .email("Email inválido")
            .required("Campo é obrigatório"),
        password: yup
            .string()
            .min(8, "Mínimo de 8 dígitos")
            .matches(
                /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
            )
            .required("Campo obrigatório!"),
    });


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } }
            = useForm(
        { resolver: yupResolver(schema), });

    const handleMyForm = async (data) => {
        await registerUser(data);
        reset();
        history.push("/PageLogin");
    };

    return (
        <ThemeProvider theme={theme}>
            <form
                className={classes.root}
                onSubmit={handleSubmit(handleMyForm)}
            >
                <img
                    className={classes.img}
                    src="https://www.imagemhost.com.br/images/2021/06/13/Paleta-de-cores.png"
                    alt="Register logo"
                />
                <Grid className={classes.box}>
                    <CssTextField
                        label="Usuario"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("username")}
                    />
                    <p>{errors.username?.message}</p>
                </Grid>
                <Grid className={classes.box}>
                    <CssTextField
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>
                </Grid>
                <Grid>
                    <Grid className={classes.box}>
                        <CssTextField
                            className={classes.textField}
                            label="Senha"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            color="primary"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </Grid>
                </Grid >
                <div >
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        CADASTRAR
                    </Button>
                </div>
                <Link className={classes.link} to="/">
                    Home
                </Link>
            </form >

        </ThemeProvider>
    );
}
export default Register;