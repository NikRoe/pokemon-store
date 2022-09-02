import { Link } from "react-router-dom";
import styled from "styled-components";

import FetchedItem from "../FetchedItem/FetchedItem";

export default function Home({ pokeItems, onAddItem, shoppingCart }) {
  return (
    <main>
      {" "}
      <nav>
        <Link to="shopping-cart">
          Items in Cart: <span>{shoppingCart.length}</span>
        </Link>
      </nav>
      <ItemWrapper>
        {pokeItems.map((item) => {
          return (
            <FetchedItem
              key={item.name}
              item={item}
              onAddItem={onAddItem}
              isOnList={shoppingCart.find((pokeItem) => {
                return item.id === pokeItem.id;
              })}
            />
          );
        })}
      </ItemWrapper>
    </main>
  );
}

const ItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  padding: 0;
  gap: 0.4rem;
`;
