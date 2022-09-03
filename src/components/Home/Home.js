import { Link } from "react-router-dom";
import styled from "styled-components";

import FetchedItem from "../FetchedItem/FetchedItem";

export default function Home({ pokeItems, onAddItem, shoppingCart }) {
  return (
    <main>
      {" "}
      <Navigation>
        <Link to="shopping-cart">Items in Cart: {shoppingCart.length}</Link>
      </Navigation>
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

const Navigation = styled.nav`
  position: absolute;
  top: 4.5rem;
  right: 1.5rem;
  font-size: large;
`;
