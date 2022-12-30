const SelectInput = (props: { id: string, label: string }) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} name={props.id}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}