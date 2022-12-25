import './FormMonitoramento.scss';
import { Button } from '../button/Button';
import { TextInput } from './inputs/TextInput';
import { useState, FormEventHandler } from 'react';
import axios from 'axios';

export const FormMonitoramento = (props: { children: string }) => {
  const [ comando, setComando ] = useState('');

  const updateComando = (value:  string) => {
    setComando(value);
  }

  const sendComando: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    return await axios.post('http://localhost:3010/d1/comando', { comando });
  }
  
  return(
    <form onSubmit={sendComando} className='form-monitoramento'>
      <h2 className='form-monitoramento__title'>{props.children}</h2>
      <TextInput id='input-comando' value={comando} cb={updateComando}></TextInput>
      <Button>Enviar</Button>
    </form>
  );
}