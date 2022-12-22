import './Status.scss';

export const Status = (prop: { children: string, value: string }) => {
  const { children, value } = prop;
  
  return(
    <article className='status'>
      <h2 className='status__title'>{ children }</h2>
      <p className='status__value'>{ value }</p>
    </article>
  );
}