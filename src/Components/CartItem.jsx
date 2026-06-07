const CartItem = ({ item }) => {
  return (
    <li className="CartItem">
      <span>{item.image}</span>
      <span>{item.name}</span>
      <strong>Qty:{item.quantity}</strong>
      <button>-</button>
      <button onClick={() => addToCart(plant)}>+</button>
    </li>
  );
};

export default CartItem;
