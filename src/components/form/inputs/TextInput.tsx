import './TextInput.scss';
import { ChangeEventHandler } from 'react';

export const TextInput = (props: { id:string, label?: string, value?: string, cb?: Function }) => {

  const update: ChangeEventHandler<HTMLInputElement> = e => {
    if(props.cb) {
      props.cb(e.target.value);
    }
  }

  if(!props.label && !props.cb) {
    return(
      <input type="text" className='input input--text'/>
    );
  } else {
    return(
      <>
        <label htmlFor={props.id}>{props.label}</label>
        <input type="text" onChange={update} value={props.value} className='input input--text' id={props.id} name={props.id}/>
      </>
    );
  }
}