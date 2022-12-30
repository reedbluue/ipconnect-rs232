import './FormCadastroNPortDevice.scss';
import { Button } from '../button/Button';
import { TextInput } from './inputs/TextInput';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import axios from 'axios';
import { Message } from '../messages/Message';


export const FormCadastroNPortDevice = () => {

  const [ inputDesc, setInputDesc ] = useState('');
  const [ inputIp, setInputIp ] = useState('');
  const [ inputMaxDevices, setInputMaxDevices ] = useState(0);
  const [ message, setMessage ] = useState(['', 'false']);

  const updateDesc = (value: string) => {
    setInputDesc(value);
  }

  const updateIp = (value: string) => {
    setInputIp(value);
  }

  const updateMaxDevices: ChangeEventHandler<HTMLSelectElement> = e => {
    setInputMaxDevices(Number(e.target.value));
  }

  const cadastrarNPortDevice: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/nportdevice", { desc: inputDesc, ip: inputIp, maxDevices: inputMaxDevices }).
      then(data => {
        if(data.status == 201) {
          setMessage(['NPortDevice cadastrado com sucesso!', 'false']);
        }
      }).catch(err => {
        setMessage([err.response.data.message, 'true']);
      });
  }

  return(
    <form className='nport-form' onSubmit={cadastrarNPortDevice}>
      <TextInput id='input-desc' label='Descrição:' value={inputDesc} cb={updateDesc}></TextInput>
      <TextInput id='input-ip' label='Endereço IP:' value={inputIp} cb={updateIp}></TextInput>
      <label htmlFor="input-max-devices">Dispositivos máximos:</label>
      <select id="input-max-devices" name="input-max-devices" className='input' value={inputMaxDevices} onChange={updateMaxDevices}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <Message msg={message[0].toString()} error={message[1]}/>
      <Button>Cadastrar</Button>
    </form>
  );
}