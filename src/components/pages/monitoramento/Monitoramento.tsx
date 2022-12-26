import axios from 'axios';
import { MouseEventHandler, useState, useEffect } from 'react';
import socket from '../../../services/wsClient';
import { Button } from '../../button/Button';
import { FormMonitoramento } from '../../form/FormMonitoramento';
import { Status } from '../../status/Status';
import './Monitoramento.scss';

export const Monitoramento = () => {

  const [ peso, setPeso ] = useState('+0.0g');
  const [ console, setConsole ] = useState(['']);
  const [ hora, setHora ] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   const weigthInterval = setInterval(async () => {
  //     try {
  //       const res = await axios('http://localhost:3010/d1/peso');
  //       if(!res.data.peso)
  //         return setPeso('+0.0g');
  //       return setPeso(res.data.peso);
  //     } catch {
  //       return setPeso('+0.0g');
  //     }
  //   }, 5000);
  //   return () => clearInterval(weigthInterval);
  // }, []);

  useEffect(() => {
    socket.on('weigth', data => setPeso(data));
    return () => { socket.off('weigth') };
  }, []);

  useEffect(() => {
    socket.on('data', (data: string) => setConsole(antConsole => [...antConsole, data]));
    return () => { socket.off('data') };
  }, []);

  useEffect(() => {
    const horaInterval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => { clearInterval(horaInterval); }
  }, []);

  const liga: MouseEventHandler<HTMLButtonElement> = async _e => {
    return await axios.post('http://localhost:3010/d1/liga');
  }

  const desliga: MouseEventHandler<HTMLButtonElement> = async _e => {
    return await axios.post('http://localhost:3010/d1/desliga');
  }

  const tara: MouseEventHandler<HTMLButtonElement> = async _e => {
    return await axios.post('http://localhost:3010/d1/tara');
  }
  
  return (
    <main className="main monitoramento">
      <div>
        <h1 className="monitoramento__title">Monitoramento</h1>
        <section className='monitoramento__status'>
          <Status value={ peso }>Peso</Status>
          <Status value={ 'ON' }>Status</Status>
          <Status value={ new Date().toLocaleDateString() }>Data</Status>
          <Status value={ hora }>Hora</Status>
        </section>
      </div>
      <div className='monitoramento__column'>
        <section className='monitoramento__send'>
          <h1>Enviar comandos</h1>
          <div className='buttons-area'>
            <Button cb={liga}>Liga</Button>
            <Button cb={desliga}>Desliga</Button>
            <Button cb={tara}>Tara</Button>
          </div>
          <FormMonitoramento key='send-form'>Comando personalizado</FormMonitoramento>
        </section>
        <section className='monitoramento__console'>
          <h1>Console</h1>
          <p className='console'>{console.filter(com => com).join('\n')}</p>
        </section>
      </div>
    </main>
  );
};
