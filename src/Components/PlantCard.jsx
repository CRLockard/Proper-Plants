export default function PlantCard({ plant, addToCart, removeFromCart }) {
  return (
    <li className="PlantCard">
      <span className="PlantEmoji">{plant.image}</span>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add To Cart</button>
    </li>
  );
}
