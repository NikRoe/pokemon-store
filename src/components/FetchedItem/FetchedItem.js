import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function FetchedItem({ item, onAddItem, isOnList }) {
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(item.url);
        const data = await response.json();
        setItemInfo(data);
      } catch (error) {
        console.error(error);
      }
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
      url: item.url,
    };

    onAddItem(updatedItem);
  }

  return (
    <ItemCard>
      {" "}
      <ListItem>
        <div>
          <img alt="" src={itemInfo.sprites?.default} />
          {item.name}
        </div>
        {itemInfo.cost && <span>{itemInfo.cost} ¥</span>}
        {itemInfo.category && <p>{itemInfo.category.name}</p>}
      </ListItem>
      {!isOnList && <button onClick={handleClick}>Add to cart</button>}
    </ItemCard>
  );
}

const ItemCard = styled.article`
  padding: 1rem;
  border: solid white 4px;
  border-radius: 14px;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
