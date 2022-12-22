import './Button.scss';

export const Button = (props: { children: string }) => {
  return(
    <button className="button">{ props.children }</button>
  );
}