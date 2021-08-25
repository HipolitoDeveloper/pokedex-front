import { baseUrl } from "./config";

const getAllPokemons = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // eslint-disable-next-line no-unused-expressions
      const response = await fetch(baseUrl);
      const pokemons = response.json();

      resolve(pokemons);
    } catch (e) {
      reject(`Algo deu errado na busca de pokemons ${e}`);
    }
  });
};

export { getAllPokemons };
