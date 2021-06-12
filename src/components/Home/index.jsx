import useStyles from './style.js'
import {Link} from 'react-router-dom'; 

const Home = () => {
    const classes = useStyles();

    return(

       <div  className={classes.root}>
            <img />
            <button><Link to="/pageRegister"> cadastre-se aqui</Link></button>
            <h4>Já possui cadastro?</h4> <Link to="/pageLogin">Clique aqui</Link>
       </div> 
    ); 
}
export default Home; 