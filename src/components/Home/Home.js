import { Link } from "react-router-dom";
import styled from "styled-components";

import FetchedItem from "../FetchedItem/FetchedItem";

export default function Home({
  pokeItems,
  onAddItem,
  shoppingCart,
  onIncreaseAmount,
  onDecreaseAmount,
}) {
  return (
    <main>
      {" "}
      <Navigation>
        <Link to="shopping-cart">
          Items in Cart:{" "}
          {shoppingCart.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.quantity,
            0
          )}
        </Link>
      </Navigation>
      <ItemWrapper>
        {pokeItems.map((item) => {
          return (
            <FetchedItem
              key={item.name}
              item={item}
              onAddItem={onAddItem}
              onIncreaseAmount={onIncreaseAmount}
              onDecreaseAmount={onDecreaseAmount}
              amount={
                shoppingCart.filter((pokeItem) => {
                  return pokeItem.id === item.id;
                })[0]?.quantity
              }
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
