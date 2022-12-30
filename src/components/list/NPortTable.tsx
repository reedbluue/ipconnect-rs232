import './NPortTable.scss';
import { NPortTableItem } from './components/NPortTableItem';

export const NPortTable = (props: { devices: Array<any> }) => {
  return (
    <>
      <table className='nport-table'>
        <thead>
          <tr>
            <th>Index</th>
            <th>Descrição</th>
            <th>Endereço IP</th>
            <th>Dispositivos Máximos</th>
          </tr>
        </thead>
        <tbody>
          {props.devices.map((device: any, index) => <NPortTableItem desc={device.desc} index={index} ip={device.ip} maxDevices={device.maxDevices} key={`NPortTable-${device.desc}`}/>)}
        </tbody>
      </table>
    </>
  );
}