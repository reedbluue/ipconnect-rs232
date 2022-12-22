import './FormMonitoramento.scss';
import { ReactElement } from 'react';
import { Button } from '../button/Button';

export const FormMonitoramento = (props: { children: ReactElement, title: string }) => {
  return(
    <form className='form-monitoramento'>
      <h2 className='form-monitoramento__title'>{props.title}</h2>
      {props.children}
      <Button>Enviar</Button>
    </form>
  );
}