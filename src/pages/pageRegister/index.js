import Register from '../../components/Register';
import * as yup from "yup";

const PageRegister = () => {
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
    return <Register
        schema={schema}
    />;
}
export default PageRegister;