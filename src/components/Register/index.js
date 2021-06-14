import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useRegister} from '../../provider/Register';
import { useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";
import useStyles from './style.js'; 
import SaveIcon from '@material-ui/icons/Save';
import {Link} from 'react-router-dom'; 

const Register = () => {

    const classes = useStyles();
    const {registerUser} = useRegister();
    const history = useHistory(); 

    const schema = yup.object().shape({
        username: yup.string()
                     .required("Campo é obrigatório")
                     .max(18 , "Limite máximo de 18 caracteres"),                   
        email: yup.string()
                  .email("Email inválido")
                  .required("Campo é obrigatório"),                   
        password: yup.string()
                     .min(8, "Mínimo de 8 dígitos")
                     .matches(
                           /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                           "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
                     )
                     .required("Campo obrigatório!"),
      });
    
    
    const{register, handleSubmit,reset , formState:{errors}} = useForm (
                                                            {resolver: yupResolver (schema),}); 

    const handleMyForm = async(data) => {
        await registerUser(data); 
        reset(); 
        history.push("/PageLogin");
    };

    return(
        <>
        <form className={classes.root} onSubmit={handleSubmit(handleMyForm)}>
            <img className={classes.img} src="https://www.imagemhost.com.br/images/2021/06/13/Paleta-de-cores.png" />
            <div>
                <TextField 
                className={classes.textField}
                    required
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="secondary"   
                    {...register("username")}/>
                <p>{errors.username?.message}</p>
            </div>
            <div>
                <TextField 
                    required
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="secondary"
                    {...register("email")}/>
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <div>
                    <TextField
                        required
                        margin="normal"
                        variant="outlined"
                        label="Senha"
                        size="small"
                        color = "secondary"
                        {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>
            </div>
            <div >
                <Button type="submit"  
                        variant="contained"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon/>}>  CADASTRAR </Button>
            </div>
            <Link className={classes.link} to="/">Voltar para Home</Link>
        </form>
       
       </>
    ); 
}
export default Register; 