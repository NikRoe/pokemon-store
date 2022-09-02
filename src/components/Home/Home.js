import { Link } from "react-router-dom";
import FetchedItem from "../FetchedItem/FetchedItem";

export default function Home({ pokeItems, onAddItem, shoppingCart }) {
  return (
    <>
      {" "}
      <nav>
        <Link to="shopping-cart">
          Items in Cart: <span>{shoppingCart.length}</span>
        </Link>
      </nav>
      <ul>
        {pokeItems.map((item) => {
          return (
            <FetchedItem
              key={item.name}
              item={item}
              onAddItem={onAddItem}
              isOnList={shoppingCart.some((pokeItem) => {
                return item.id === pokeItem.id;
              })}
            />
          );
        })}
      </ul>
    </>
  );
}
