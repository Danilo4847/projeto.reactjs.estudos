import { Link } from 'react-router-dom'
import Style from './Home.module.css'
import foto from './../icon/Foto.jpg'
function Home() {
    return (
        <div className={Style.box}>
            <h1>Bem vindo!</h1>
            <h2>Gerencie os seus afazeres por nivel de priorida.</h2>
            <p>Comece agora a adicionar os afazeres</p>
            <Link to="/novaTarefa">Nova Tarefa</Link>
            <img src={foto}/>
        </div>
    );
}
export default Home; 