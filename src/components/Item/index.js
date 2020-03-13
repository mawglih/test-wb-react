import React from 'react';

const Item = ({
  name,
  model,
  cost,
  shipclass,
}) => {
  return (
    <>
      <h4>Starship name: {name}</h4>
      <p>Starship model: {model}</p>
      <p>Cost: {cost}</p>
      <p>Starship slass: {shipclass}</p>
    </>
  );
}

export default Item;
