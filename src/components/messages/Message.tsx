import './Message.scss';

export const Message = (props: { msg: string, error: string }) => {
  if(props.msg) {
    return (
      <p className={props.error != 'false' ? 'error-message' : 'sucess-message'}>{props.msg}</p>
    );
  }
  return (<></>);
}