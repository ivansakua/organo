/* 
 
 */
import './CampoTexto.css';

const CampoTexto = (props) => {
    
    const Digitado = (evento) => {
        props.alterado(evento.target.value);
    };
    
    return (
        <div className="campo_texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Digitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};

export default CampoTexto;