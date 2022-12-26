import './FormConfig.scss';
import { Button } from '../button/Button';
import { TextInput } from './inputs/TextInput';
import { useState } from 'react';

export const FormConfig = () => {

  const [ inputIp, setInpuIp ] = useState('');
  const [ inputPort, setInpuPort ] = useState('');

  const updateIp = (value: string) => {
    setInpuIp(value);
  }

  const updatePort = (value: string) => {
    setInpuPort(value);
  }

  return(
    <form className='form-config'>
      <TextInput id='input-ip' label='Endereço IP:' value={inputIp} cb={updateIp}/>
      <TextInput id='input-port' label='Porta:' value={inputPort} cb={updatePort}/>
      <Button>Salvar e reiniciar</Button>
    </form>
  );
}