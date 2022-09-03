import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

export default function App() {
  const [pokeItems, setPokeItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  function capitalizeText(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", "");
  }

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

  function removeItem(item) {
    setShoppingCart(
      shoppingCart.filter((shoppingItem) => {
        return item.id !== shoppingItem.id;
      })
    );
  }

  function increaseAmount(id) {
    setShoppingCart(
      shoppingCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function decreaseAmount(id) {
    setShoppingCart(
      shoppingCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => {
          return item.quantity !== 0;
        })
    );
  }

  const apiURL = "https://pokeapi.co/api/v2/item/";

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setPokeItems(
          data.results.map((item) => {
            return { name: capitalizeText(item.name), url: item.url };
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <AppHeader>Poké-Mart-Online-Shop</AppHeader>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddItem={addItem}
              pokeItems={pokeItems}
              shoppingCart={shoppingCart}
              onIncreaseAmount={increaseAmount}
              onDecreaseAmount={decreaseAmount}
            />
          }
        ></Route>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              shoppingCart={shoppingCart}
              onRemoveItem={removeItem}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

const AppHeader = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;
