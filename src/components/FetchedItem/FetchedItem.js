import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function FetchedItem({ item, onAddItem }) {
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(item.url);
      const data = await response.json();
      setItemInfo(data);
    }
    getData();
  }, [item.url]);

  function handleClick() {
    const updatedItem = {
      id: nanoid(),
      name: item.name,
      image: itemInfo.sprites.default,
      cost: itemInfo.cost,
      quantity: 1,
    };

    onAddItem(updatedItem);
  }

  return (
    <li onClick={handleClick}>
      <img alt="" src={itemInfo.sprites?.default} />
      {itemInfo.cost && <span>{itemInfo.cost}</span>}
      {itemInfo.category && <p>{itemInfo.category.name}</p>}
      {item.name}
    </li>
  );
}
