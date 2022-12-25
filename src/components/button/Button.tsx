import './Button.scss';
import { MouseEventHandler } from 'react';

export const Button = (props: { children: string, cb?: MouseEventHandler<HTMLButtonElement> }) => {
  
  if(!props.cb) {
    return(
      <button className="button">{ props.children }</button>
    );
  } else {
    return(
      <button className="button" onClick={props.cb}>{ props.children }</button>
    );
  }
}