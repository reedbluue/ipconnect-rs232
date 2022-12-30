export const NPortTableItem = (props: { index: number, desc: string, ip: string, maxDevices: number }) => {
  return (
    <>
      <tr>
        <td>{props.index}</td>
        <td>{props.desc}</td>
        <td>{props.ip}</td>
        <td>{props.maxDevices}</td>
      </tr>
    </>
  );
}