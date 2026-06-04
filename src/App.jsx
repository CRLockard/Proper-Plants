import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./Components/PlantList";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((previousCart) => {
      const itemExists = previousCart.find((item) => item.id === plant.id);

      if (itemExists) {
        return previousCart.map((item) => {
          return item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        const newCartItem = {
          ...plant,
          quanity: 1,
        };
        return [...previousCart, newCartItem];
      }
    });
  }

  function removeFromCart(itemToRemove) {
    setCart((previousCart) => {
      return previousCart
        .map((item) => {
          if (item.id === itemToRemove.id) {
            return { ...item, quantity: item.quanity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quanity > 0);
    });
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <PlantList
        plants={PLANTS}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
