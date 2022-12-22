import './TextInput.scss';

export const TextInput = (props: { id:string, label?: string }) => {
  if(!props.label) {
    return(
      <input type="text" className='input input--text'/>
    );
  } else {
    return(
      <>
        <label htmlFor={props.id}>{props.label}</label>
        <input type="text" className='input input--text' id={props.id} name={props.id}/>
      </>
    );
  }
}