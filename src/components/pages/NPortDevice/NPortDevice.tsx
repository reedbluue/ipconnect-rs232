import { FormCadastroNPortDevice } from '../../form/FormCadastroNPortDevice';
import { NPortTable } from '../../list/NPortTable';
import './NPortDevice.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const NPortDevice = () => {

  const [ devices, setDevices ] = useState<Array<any>>([]);

  useEffect(() => {
    axios('http://localhost:3001/nportdevice').
      then((data: any) => { setDevices(data.data) }).
      catch(err => { console.log(err); setDevices([]) });
  });

  return (
    <main className="main nportdevice">
      <div>
        <h1 className="nportdevice__title">Cadastro - NPortDevice</h1>
        <FormCadastroNPortDevice></FormCadastroNPortDevice>
      </div>
      <div>
        <h1 className="nportdevice__title">NPortDevices cadastrados</h1>
        <NPortTable devices={devices}/>
      </div>
    </main>
  );
};
