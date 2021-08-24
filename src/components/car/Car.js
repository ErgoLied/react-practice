export default function Car({item}) {
  return (
    <div>
        {item.id} - {item.model} - {item.price} - {item.year}
    </div>
  );
}