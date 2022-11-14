import style from './NovaTarefa.module.css'
import Form from '../components/form/Form';
function NovaTarefa() {
    return (
        <div className={style.box}>
            <h1>Nova Tarefa</h1>
            <Form />
        </div>
    );
}
export default NovaTarefa; 