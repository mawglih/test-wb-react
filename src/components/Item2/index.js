import React from 'react';

const Item = ({
  genus,
  language,
}) => {
  return (
    <>
      <h4>Genus: {genus}</h4>
      <p>Language: {language}</p>
    </>
  );
}

export default Item;
