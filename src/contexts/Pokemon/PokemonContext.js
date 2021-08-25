import { createContext, useReducer } from "react";
import { PokemonReducer } from "./PokemonReducer";
import { getAllPokemons } from "../../services/PokemonService";

export const PokemonContext = createContext();

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  filteredPokemonsByType: [],
  favoritePokemons: [],
  types: [],
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const buildPokemonList = async () => {
    getAllPokemons().then(
      (pokemons) => {
        dispatch({
          type: "LOAD_POKEMONS",
          pokemons,
        });
      },
      (error) => console.error(error)
    );
  };

  const searchPokemon = (payload) => {
    dispatch({
      type: "SEARCH_POKEMON",
      payload,
    });
  };

  const filterByType = (payload) => {
    dispatch({
      type: "FILTER_BY_TYPE",
      payload,
    });
  };

  const orderPokemon = (payload) => {
    dispatch({
      type: "ORDER_POKEMONS",
      payload,
    });
  };

  const filterFavorites = (payload) => {
    dispatch({
      type: "FILTER_FAVORITES",
      payload,
    });
  };

  const favoritePokemon = (payload) => {
    dispatch({
      type: "FAVORITE_POKEMON",
      payload,
    });
  };

  const contextValues = {
    buildPokemonList,
    searchPokemon,
    filterByType,
    orderPokemon,
    filterFavorites,
    favoritePokemon,

    ...state,
  };

  return (
    <PokemonContext.Provider value={contextValues}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
