import useStyles from "./style.js";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://www.imagemhost.com.br/images/2021/06/17/logo.png"
        alt="logo"
        className={classes.img}
      />
      <div className={classes.menu}>
        <h2 className={classes.h2}>
          <Link className={classes.link} to="/pageRegister">
            cadastre-se aqui
          </Link>
        </h2>
        <h4 className={classes.h4}>
          Já possui cadastro?
          <Link className={classes.link} to="/pageLogin">
            Clique aqui
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default Home;
