import style from'./Form.module.css'

function Form() {
    return (
        <div className={style.form_module}>
            <form>
                <div className={style.form_box}>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" placeholder="inrira o titulo" name="titulo" id="titulo"/>
                </div>
                <div className={style.form_box}>
                <label htmlFor="desc">Descrição</label>
                    <input type="text" placeholder="inrira a descrição" name="desc" id="desc"/>
                </div>
                <div className={style.form_box}>
                    <label>Nivel de Prioridade</label>
                    <select>
                        <option value="1">Pequeno</option>
                        <option value="1">Médio</option>
                        <option value="1">Alto</option>

                    </select>
                </div>
                <input className={style.bt} type="submit" value="ENTER"/>
            </form>
        </div>
    )
}
export default Form;