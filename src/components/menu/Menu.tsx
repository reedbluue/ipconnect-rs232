import './Menu.scss';
import { MenuItem } from './menuItem/MenuItem';

export const Menu = () => {
  return (
    <nav className='menu'>
      <img className='menu__logo' src="assets/img/Logo.svg" alt="Logo ipConnect" />
      <div className='menu__buttons'>
        <MenuItem btype='home' route='/'>Início</MenuItem>
        <MenuItem btype='monitor' route='/monitoramento'>Monitor</MenuItem>
        <MenuItem btype='config' route='/configuracoes'>Configurações</MenuItem>
        <MenuItem btype='github' route='#'>GitHub</MenuItem>
      </div>
      <footer className='menu__footer'>
        <section className='github'>
          <a className='github__icon' href='https://github.com/reedbluue/' target='_blank'></a>
          <p>by Igor Oliveira</p>
        </section>
      </footer>
    </nav>
  );
}