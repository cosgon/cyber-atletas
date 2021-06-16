import { useRegister } from '../../provider/Register/index.js';
import useStyles, { CssTextField, theme } from './style.js';
import { ThemeProvider } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from "@material-ui/core";
import { ToastContainer } from 'react-toastify';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = ({ schema }) => {
    const classes = useStyles();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } }
        = useForm(
            { resolver: yupResolver(schema), });

    const { registerUser } = useRegister();

    const handleMyForm = (data) => {
        registerUser(data);
        reset();
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
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
                            type="password"
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