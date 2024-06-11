const Subtotal = ({title, price}) => {
  return (
    <div className="subtotal py-8 flex justify-between">
      <span>{title}</span>
      <span className="font-bold">{price}</span>
    </div>
  );
}

export default Subtotal