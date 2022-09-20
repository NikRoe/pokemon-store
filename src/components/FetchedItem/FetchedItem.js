import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function FetchedItem({
  item,
  onAddItem,
  isOnList,
  onIncreaseAmount,
  onDecreaseAmount,
  amount,
}) {
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

  let actionButton = '';

  if (isOnList) {
    actionButton = (
      <>
        <ButtonWrapper>
          <AmountChangeButton onClick={() => onDecreaseAmount(itemInfo.id)}>
            -
          </AmountChangeButton>
          <AmountChangeButton onClick={() => onIncreaseAmount(itemInfo.id)}>
            +
          </AmountChangeButton>
        </ButtonWrapper>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          In Cart:
          <AnimatePresence>
            <motion.span
              initial={{ y: -40, opacity: 0, position: 'absolute' }}
              animate={{ y: 0, opacity: 1, position: 'static' }}
              transition={{ delay: 0.1 }}
              key={amount}
            >
              {amount}
            </motion.span>
          </AnimatePresence>
        </div>
      </>
    );
  } else {
    actionButton = <Button onClick={handleClick}>Add to cart</Button>;
  }

  return (
    <ItemCard>
      {' '}
      <ListItem>
        <ImageWrapper>
          <img
            alt=""
            src={itemInfo.sprites?.default}
            style={{ imageRendering: 'pixelated', height: '80px' }}
          />
        </ImageWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>{item.name}</span>
          {itemInfo.cost && itemInfo.cost}
          <span>¥</span>
        </div>
        {actionButton}
      </ListItem>
    </ItemCard>
  );
}

const ItemCard = styled.article`
  padding: 1rem;
  border: solid white 4px;
  border-radius: 14px;
  font-size: large;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.7rem;
  background-color: violet;
  border: none;
  border-radius: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: space-around;
  width: 100%;
`;

const AmountChangeButton = styled.button`
  border: none;
  background-color: violet;
  border-radius: 14px;
  padding: 0.5rem;
`;
