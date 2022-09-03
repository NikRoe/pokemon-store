import styled from "styled-components";

export default function CartItem({ cartItem, index, onRemoveItem }) {
  return (
    <tr>
      <td>{index + 1}.</td>
      <td>
        <img alt="" src={cartItem.image} />
      </td>
      <td>{cartItem.name}</td>
      <td>{cartItem.cost} ¥</td>
      <td>{cartItem.quantity}x</td>
      <td>{cartItem.cost * cartItem.quantity} ¥</td>
      <td>
        <Button onClick={() => onRemoveItem(cartItem)}>X</Button>
      </td>
    </tr>
  );
}

const Button = styled.button`
  border: none;
  color: red;
`;
