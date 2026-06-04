import PlantCard from "./PlantCard";

export default function PlantList({ plants, addToCart, removeFromCart }) {
  return (
    <section>
      <h2>Plants</h2>

      <ul className="plant-list">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
