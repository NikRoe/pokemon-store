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
      id: itemInfo.id,
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img alt="" src={itemInfo.sprites?.default} />
          {item.name}
        </div>
        {itemInfo.cost && <span>{itemInfo.cost} ¥</span>}
        {!isOnList && <Button onClick={handleClick}>Add to cart</Button>}
      </ListItem>
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
  gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.7rem;
  background-color: violet;
  border: none;
  border-radius: 14px;
`;
