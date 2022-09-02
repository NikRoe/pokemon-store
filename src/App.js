import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [pokeItems, setPokeItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItem(item) {
    setPokeItems(
      pokeItems.map((pokeItem) => {
        if (item.name === pokeItem.name) {
          return item;
        } else {
          return pokeItem;
        }
      })
    );
    setShoppingCart([item, ...shoppingCart]);
  }

  const apiURL = "https://pokeapi.co/api/v2/item/";

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setPokeItems(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1>Poke Mart</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddItem={addItem}
              pokeItems={pokeItems}
              shoppingCart={shoppingCart}
            />
          }
        ></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart shoppingCart={shoppingCart} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
