import { Button } from '../../button/Button';
import { FormMonitoramento } from '../../form/FormMonitoramento';
import { TextInput } from '../../form/inputs/TextInput';
import { Status } from '../../status/Status';
import './Monitoramento.scss';

export const Monitoramento = () => {
  return (
    <main className="main monitoramento">
      <div>
        <h1 className="monitoramento__title">Monitoramento</h1>
        <section className='monitoramento__status'>
          <Status value='154 g'>Status 1</Status>
          <Status value='12:16:14'>Status 2</Status>
          <Status value='Testando'>Status 3</Status>
          <Status value='10100101'>Status 4</Status>
        </section>
      </div>
      <div className='monitoramento__column'>
        <section className='monitoramento__send'>
          <h1>Enviar comandos</h1>
          <div className='buttons-area'>
            <Button>Ação 1</Button>
            <Button>Ação 2</Button>
            <Button>Ação 3</Button>
            <Button>Ação 4</Button>
          </div>
          <FormMonitoramento title='Comando personalizado' key='send-form'><TextInput id='input-comando'></TextInput></FormMonitoramento>
        </section>
        <section className='monitoramento__console'>
          <h1>Console</h1>
          <p className='console'></p>
        </section>
      </div>
    </main>
  );
};
