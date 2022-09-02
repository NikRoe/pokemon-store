import { useEffect, useState } from "react";
import FetchedItem from "./components/FetchedItem/FetchedItem";

function App() {
  const [pokeItems, setPokeItems] = useState([]);

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
  }

  const apiURL = "https://pokeapi.co/api/v2/item/";

  useEffect(() => {
    async function getData() {
      const response = await fetch(apiURL);
      const data = await response.json();
      setPokeItems(data.results);
    }
    getData();
  }, []);

  console.log(pokeItems);

  return (
    <>
      <div>hello world</div>
      <ul>
        {pokeItems.map((item) => {
          return (
            <FetchedItem key={item.name} item={item} onAddItem={addItem} />
          );
        })}
      </ul>
    </>
  );
}

export default App;
