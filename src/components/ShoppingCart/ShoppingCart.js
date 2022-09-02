import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function ShoppingCart({ shoppingCart }) {
  const result = shoppingCart.reduce(
    (previousvalue, currentValue) => previousvalue + currentValue.cost,
    0
  );

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {shoppingCart.map((item, index) => {
          return <CartItem key={item.id} cartItem={item} index={index} />;
        })}
      </ul>
      <p>{result} ¥</p>
      <nav>
        <Link to="/">Back to Shop</Link>
      </nav>
    </>
  );
}
