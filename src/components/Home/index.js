import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSwapiRequested } from '../../store/render-swapi/render-swapi.actions';
import { getPokeRequested } from '../../store/render-poke/render-poke.actions';
import ListItem from '../../components/ListItem';
import styles from './home.css';

const Home = () => {
  const title = 'Data is retrieved';
  const dispatch = useDispatch();
  const { ships, loading: shipsLoading, error: shipError } = useSelector(state => state.swapi);
  const { poke, loading: pokeLoading, error: pokeError } = useSelector(state => state.poke);
  const actions = useMemo(
		() =>
			bindActionCreators(
				{
          getSwapi: getSwapiRequested,
          getPoke: getPokeRequested,
				},
				dispatch,
      ),
    [],
  );

	useEffect(() => {
    if(ships && ships.length < 1) {
      actions.getSwapi();
    }
    if(poke && poke.length < 1) {
      actions.getPoke();
    }
	},);

  return (
    <>
      <h1 className={styles.mainTitle}>{title}</h1>
      <div className={styles.container}>
        {!shipError && <ListItem
          loading={shipsLoading}
          items={ships}
          title='Starships'
        />}
        {!pokeError && <ListItem
          loading2={pokeLoading}
          poke={poke}
          title2='Pokemons'
        />
        }
      </div>
    </>
  );
}

export default Home;
