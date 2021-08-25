import { constructNewPokemonObj, fixTypes } from "../../factory/pokemon";

const buildTypesFilter = (types, indexToFilter) => {
  let filteredTypes = [];

  types.forEach((type, index) => {
    if (index === indexToFilter) {
      type.isActive = !type.isActive;
    }
    if (type.isActive) filteredTypes.push(type);
  });

  return filteredTypes;
};

const buildPokemonList = (pokemonList) => {
  let types = [];
  let newPokemonList = [];

  pokemonList.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      types.push(type);
    });

    newPokemonList.push(constructNewPokemonObj(pokemon));
  });

  return {
    newPokemonList: newPokemonList,
    newTypeList: fixTypes(types),
  };
};

export const PokemonReducer = (state, action) => {
  const verifyUsedFilers = () => {
    let isToFilterByType,
      isToFilterByFavorite,
      isToFilterBySearch = false;

    state.filteredPokemons.forEach((pokemon) => {
      if (pokemon.isFilteredByType) {
        isToFilterByType = true;
      }

      if (pokemon.isFavorite) {
        isToFilterByFavorite = true;
      }

      if (pokemon.isSearched) {
        isToFilterBySearch = true;
      }
    });

    return { isToFilterByType, isToFilterByFavorite, isToFilterBySearch };
  };

  switch (action.type) {
    case "LOAD_POKEMONS":
      const pokemons = action.pokemons;

      if (localStorage.getItem("pokemons")) {
        const pokemonList = JSON.parse(localStorage.getItem("pokemons"));
        state.types = JSON.parse(localStorage.getItem("types"));
        state.pokemons = pokemonList;
        state.filteredPokemons = pokemonList;
      } else {
        const { newPokemonList, newTypeList } = buildPokemonList(
          pokemons.results,
          true
        );

        localStorage.setItem("types", JSON.stringify(newTypeList));

        newPokemonList.forEach((p) => (p.isInView = true));

        state.types = newTypeList;
        state.pokemons = newPokemonList;
        state.filteredPokemons = newPokemonList;
      }

      return {
        ...state,
        pokemons: state.pokemons,
        filteredPokemons: state.filteredPokemons,
        types: state.types,
      };

    case "SEARCH_POKEMON":
      const { searchText } = action.payload;
      const pokemonsToFilter =
        state.filteredPokemonsByType.length > 0
          ? state.filteredPokemonsByType
          : state.pokemons;

      let filteredPokemons = [];

      const regex = new RegExp(`${searchText.trim()}`, "i");
      filteredPokemons = pokemonsToFilter.filter(
        (p) => p.name.search(regex) >= 0 || p.number.search(regex) >= 0
      );

      state.filteredPokemons = filteredPokemons;

      return {
        ...state,
        filteredPokemons: state.filteredPokemons,
        isFilteringBy: state.isFilteringBy,
      };

    case "FILTER_BY_TYPE":
      const indexToFilter = action.payload;
      const typesToBeFiltered = buildTypesFilter(state.types, indexToFilter);
      let filteredPokemonsByType = [];

      if (typesToBeFiltered.length > 0) {
        state.pokemons.forEach((pokemon) => {
          pokemon.isFilteredByType = false;
          let isFilteredType = false;
          pokemon.types.forEach((type) => {
            if (typesToBeFiltered.some((t) => t.name === type.name)) {
              isFilteredType = true;
            }
          });

          if (isFilteredType) {
            pokemon.isInView = true;
            filteredPokemonsByType.push(pokemon);
          }
        });
        state.filteredPokemons = filteredPokemonsByType;
        state.filteredPokemonsByType = filteredPokemonsByType;
      } else {
        state.filteredPokemons = state.pokemons;
        state.filteredPokemonsByType = [];
      }

      return {
        ...state,
        types: state.types,
        filteredPokemons: state.filteredPokemons,
        filteredPokemonsByType: state.filteredPokemonsByType,
      };

    case "FILTER_FAVORITES":
      const isShowingFavorites = action.payload;

      if (isShowingFavorites) {
        state.favoritePokemons = state.pokemons.filter(
          (pokemon) => pokemon.isFavorite
        );

        state.filteredPokemons = state.favoritePokemons;
      } else {
        state.favoritePokemons = [];
        state.filteredPokemons = state.pokemons;
      }

      return {
        ...state,
        filteredPokemons: state.filteredPokemons,
        favoritePokemons: state.favoritePokemons,
      };
    case "FAVORITE_POKEMON":
      const name = action.payload.name;

      state.filteredPokemons = state.filteredPokemons.map((pokemon, index) => {
        if (pokemon.name === name) {
          pokemon.isFavorite = !pokemon.isFavorite;
          console.log(!pokemon.isFavorite);
        }

        return pokemon;
      });

      localStorage.setItem("pokemons", JSON.stringify(state.pokemons));
      return {
        ...state,
        filteredPokemons: state.filteredPokemons,
        pokemons: state.pokemons,
      };

    case "ORDER_POKEMONS": {
      const { value } = action.payload;

      switch (value) {
        case "MENORNB":
          state.filteredPokemons.sort((a, b) => {
            if (a.number > b.number) return -1;
            else if (a.number < b.number) return 1;
            else return 0;
          });
          break;

        case "MAIORNB":
          state.filteredPokemons.sort((a, b) => {
            if (a.number < b.number) return -1;
            else if (a.number > b.number) return 1;
            else return 0;
          });
          break;

        case "MAIORAZ":
          state.filteredPokemons.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            else return 0;
          });
          break;
        case "MENORZA":
          state.filteredPokemons.sort((a, b) => {
            if (a.name > b.name) return -1;
            else if (a.name < b.name) return 1;
            else return 0;
          });
          break;
        default:
          state.filteredPokemons = state.pokemons;
      }

      return {
        ...state,
        filteredPokemons: state.filteredPokemons,
      };
    }
  }
};
