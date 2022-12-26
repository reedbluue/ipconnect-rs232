import { FormConfig } from '../../form/FormConfig';
import './Configuracoes.scss';

export const Configuracoes = () => {
  return (
    <main className="main configuracoes">
        <h1 className="configuracoes__title">Configurações</h1>
        <FormConfig key='configuracoes-form'></FormConfig>
    </main>
  );
};
