/* 
 
 */
import './CampoSelect.css';

const CampoSelect = (props) => {
    
    const Selecionado = (evento) => {
        props.alterado(evento.target.value);
    };
    
    return (
        <div className="campo_select">
            <label>{props.label}</label>
            <select onChange={Selecionado} required="{props.obrigatorio}" value={props.valor}>
                <option value=""></option>
                {props.itens.map(
                    (item, index) => {
                        return (
                            <option key={index}>{item.nome}</option>
                        );
                    }
                )};
            </select>
        </div>
    );  
};

export default CampoSelect;