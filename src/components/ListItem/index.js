import React from 'react';
import Item from '../Item';
import Item2 from '../Item2';
import styles from './listitem.css';

const ListItem = ({
  loading,
  loading2,
  items,
  title,
  title2,
  poke,
}) => {
  return (
    <div>
      <div className={styles.column}>
        <h2>{title}</h2>
          <ul>
            {loading ? <h1>Loading....</h1> : (items && items.map((item,indx) => (
              <div className={styles.item} key={Math.random(indx)}>
                <Item
                  name={item.name}
                  model={item.model}
                  cost={item.cost_in_credits}
                  shipclass={item.starship_class}
                />
              </div>
            )))
          }
          </ul>
      </div>
        <div className={styles.column}>
          <h2>{title2}</h2>
          <ul>
            {loading2 ? <h1>Loading....</h1> : (poke && poke.map((item,indx) => (
              <div className={styles.item} key={Math.random(indx)}>
                <Item2
                  genus={item.genus}
                  language={item.language.name}
                />
              </div>
            )))
          }
        </ul>
        </div>

    </div>
  );
}

export default ListItem;
