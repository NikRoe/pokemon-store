export default function CartItem({ cartItem, index }) {
  return (
    <li>
      <span>{index + 1}.</span>
      <img alt="" src={cartItem.image} />
      {cartItem.name}
      <p>{cartItem.cost} ¥</p>
      <p>{cartItem.quantity}x</p>
      <p>{cartItem.cost * cartItem.quantity} ¥</p>
    </li>
  );
}
