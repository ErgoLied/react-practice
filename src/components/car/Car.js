export default function Car({item, edit, steal}) {
    const clickSteal = () => {
        steal(item.id);
    }
    const clickEdit = () => {
        edit(item);
    }
  return (
    <div className={'car'}>
        <div>{item.id}</div>
        <div className={'model'}>{item.model}</div>
        <div className={'prise'}>{item.price}</div>
        <div>{item.year}</div>
        <button onClick={clickEdit}>edit</button>
        <button onClick={clickSteal}>steal</button>
    </div>
  );
}