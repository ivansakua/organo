/* 
 
 */
import './Formulario.css';
import CampoTexto from '../../componentes/CampoTexto/CampoTexto'
import CampoSelect from '../../componentes/CampoSelect/CampoSelect';
import Botao from '../../componentes/Botao/Botao';
import {useState} from 'react';

const Formulario = (props) => {
    
    
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    const Cadastrar = (evento) => {
        evento.preventDefault();
        props.cadastrarColaborador(
            {
                nome,
                cargo,
                imagem,
                time
            }
        );
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };
    
    return (
        <section className="formulario">
            <form onSubmit={Cadastrar}>
                <h2>Preencha os dados do colaborador para adicionar.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo} 
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem} 
                    alterado={valor => setImagem(valor)}
                />
                <CampoSelect 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time} 
                    alterado={valor => setTime(valor)}
                />
                <Botao>Cadastrar Colaborador</Botao>
            </form>
        </section>
    );
};

export default Formulario;