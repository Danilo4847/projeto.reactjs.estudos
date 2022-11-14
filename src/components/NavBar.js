import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import Tarefa from '../pages/Tarefas';
import NovaTarefa from '../pages/NovaTarefa';

import style from './NavBar.module.css';

import img from './../icon/ic.webp'
function NavBar() {
    return (
        <Router>
            <ul className={style.nav_module}>
                <li><Link to="/"><img src={img} /></Link></li>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/novaTarefa">Nova Tarefa</Link></li>
                <li><Link to="/tarefa">Tarefa</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/novaTarefa' element={<NovaTarefa />}></Route>
                <Route path='/tarefa' element={<Tarefa />}></Route>
            </Routes>
 
        </Router>

    )
}
export default NavBar;