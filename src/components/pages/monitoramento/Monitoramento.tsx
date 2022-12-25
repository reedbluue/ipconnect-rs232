import axios from 'axios';
import { MouseEventHandler, useState, SetStateAction } from 'react';
import { Button } from '../../button/Button';
import { FormMonitoramento } from '../../form/FormMonitoramento';
import { Status } from '../../status/Status';
import './Monitoramento.scss';

let pesoInterval = setInterval(() => {});

export const Monitoramento = () => {

  const [ peso, setPeso ] = useState('+0.0g');
  
  clearInterval(pesoInterval);

  pesoInterval = setInterval(async () => {
    try {
      const res = await axios('http://localhost:3010/d1/peso');
      if(!res.data.peso)
        return setPeso('+0.0g');
      return setPeso(res.data.peso);
    } catch {
      return setPeso('+0.0g');
    }
  }, 5000);

  const liga: MouseEventHandler<HTMLButtonElement> = async e => {
    return await axios.post('http://localhost:3010/d1/liga');
  }

  const desliga: MouseEventHandler<HTMLButtonElement> = async e => {
    return await axios.post('http://localhost:3010/d1/desliga');
  }

  const tara: MouseEventHandler<HTMLButtonElement> = async e => {
    return await axios.post('http://localhost:3010/d1/tara');
  }
  
  return (
    <main className="main monitoramento">
      <div>
        <h1 className="monitoramento__title">Monitoramento</h1>
        <section className='monitoramento__status'>
          <Status value={ peso }>Peso</Status>
          <Status value={ peso }>Peso</Status>
          <Status value={ peso }>Peso</Status>
          <Status value={ peso }>Peso</Status>
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
          <p className='console'></p>
        </section>
      </div>
    </main>
  );
};
