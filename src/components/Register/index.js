import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useRegister} from '../../provider/Register';
import { useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";

const Register = () => {

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
        <form onSubmit={handleSubmit(handleMyForm)}>
            <div>
                <TextField
                    required
                    margin="normal"
                    variant="outlined"
                    label="Username"
                    size="small"
                    color="primary"
                    placeholder="Username" 
                    {...register("username")}/>
                <p>{errors.username?.message}</p>
            </div>
            <div>
                <TextField
                    required
                    margin="normal"
                    variant="outlined"
                    label="Email"
                    size="small"
                    color="primary"
                    placeholder="Email" 
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
                        color="primary"
                        type="password" 
                        className="inputSenha" 
                        placeholder="Senha" 
                        {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </div>
            </div>
            <div >
                <Button type="submit"  variant="contained" color="primary">  CADASTRAR </Button>
            </div>
        </form>
       </>
    ); 
}
export default Register; 