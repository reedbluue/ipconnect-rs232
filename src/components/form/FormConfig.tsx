import './FormConfig.scss';
import { Button } from '../button/Button';
import { TextInput } from './inputs/TextInput';

export const FormConfig = () => {
  return(
    <form className='form-config'>
      <TextInput id='input-ip' label='Endereço IP:'/>
      <TextInput id='porta-ip' label='Porta:'/>
      <Button>Salvar e reiniciar</Button>
    </form>
  );
}