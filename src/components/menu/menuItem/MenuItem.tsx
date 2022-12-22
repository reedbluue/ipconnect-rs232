import './MenuItem.scss';

export const MenuItem = (props: { children: string, btype: string, route: string}) => {
  const { children, btype, route } = props;
  return (
    <a className="menu-item" href={route}>
      <div className={`menu-item__icon menu-item__icon--${_typeOfMenu(btype)}`}></div>
      <p className="menu-item__text">{ children }</p>
    </a>
  );
}

const _typeOfMenu = (type: string) => {
  const types = ['home', 'monitor', 'config', 'github'];
  return types.includes(type) ? type : 'home';
}