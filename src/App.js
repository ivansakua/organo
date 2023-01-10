import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';
import {useState} from 'react';

const App = () => {
    
    const times = [];    
    times[1] = {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9'
    };
    times[2] = {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF'
    };
    times[3] = {
        nome: 'Data Science',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2'
    };  
    times[4] = {
        nome: 'Dev-Ops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    };
    times[5] = {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5'
    };
    times[6] = {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9'
    };
    times[7] = {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF'
    };
    
    const [colaboradores, setColaboradores] =  useState([]);
    
    const novoColaborador = (colaborador) => {        
        setColaboradores([...colaboradores, colaborador]);
        console.log(colaboradores);
    }
    
    return (
      <div className="App">
            <Banner />
            <Formulario cadastrarColaborador={colaborador => novoColaborador(colaborador)} times={times} />
            {times.map(
                time => <Time 
                    key={time.nome} 
                    nome={time.nome} 
                    corPrimaria={time.corPrimaria} 
                    corSecundaria={time.corSecundaria} 
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
            )}
            <Rodape />
      </div>
    );
};

export default App;