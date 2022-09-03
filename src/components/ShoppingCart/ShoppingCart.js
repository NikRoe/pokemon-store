import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../CartItem/CartItem";

export default function ShoppingCart({ shoppingCart, onRemoveItem }) {
  const result = shoppingCart.reduce(
    (previousvalue, currentValue) =>
      previousvalue + currentValue.cost * currentValue.quantity,
    0
  );

  return (
    <main>
      <CartHeader>Shopping Cart</CartHeader>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item, index) => {
            return (
              <CartItem
                key={item.id}
                cartItem={item}
                index={index}
                onRemoveItem={onRemoveItem}
              />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={5}>Total: </th>
            <Sum>{result} ¥</Sum>
          </tr>
        </tfoot>
      </Table>
      <ButtonWrapper>
        <Button>Buy Now</Button>
      </ButtonWrapper>
      <Navigation>
        <Link to="/">Back to Shop</Link>
      </Navigation>
    </main>
  );
}

const CartHeader = styled.h2`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
  font-size: large;
`;

const Sum = styled.td`
  border-top: 2px solid black;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 0.7rem 2rem;
  background-color: violet;
  border: none;
  border-radius: 14px;
  font-size: large;
  margin: 2rem;
`;

const Navigation = styled.nav`
  text-align: center;
  font-size: large;
`;
