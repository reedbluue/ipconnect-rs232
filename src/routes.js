import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Configuracoes } from './components/pages/configuracoes/Confirguracoes';
import { Inicio } from './components/pages/inicio/Inicio';
import { Monitoramento } from './components/pages/monitoramento/Monitoramento';

export default function AppRouter() {
  return(

    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/monitoramento' element={<Monitoramento/>}/>
        <Route path='/configuracoes' element={<Configuracoes/>}/>
      </Routes>
    </Router>

  );
}