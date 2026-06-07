import CartItem from "./CartItem";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;
