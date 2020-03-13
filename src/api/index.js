import axios from 'axios';
const url1 = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships/';
const url2 = "https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon-species/1/";

export default {
  getSwapi: () => axios({
    url: url1,
    method: 'GET',
  }),
  getPoke: () => axios({
    url: url2,
    method: 'GET',
  }),
};
