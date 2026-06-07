const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <li className="CartItem">
      <span>{item.image}</span>
      <span>{item.name}</span>
      <strong>Qty:{item.quantity}</strong>
      <button onClick={() => removeFromCart(item)}>-</button>
      <button onClick={() => addToCart(item)}>+</button>
    </li>
  );
};

export default CartItem;
