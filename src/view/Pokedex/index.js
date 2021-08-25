import * as S from "./styled";
import pokeball from "../../assets/pokeball.svg";
import synviauser from "../../assets/synvia-A.svg";
import GlobalStyle from "../../styles/global";
import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../contexts/Pokemon/PokemonContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";

const filtersName = [
  { value: "MENORNB", label: "Menor número positivo" },
  { value: "MAIORNB", label: "Maior número positivo" },
  { value: "MAIORAZ", label: "Pokémons de A-Z" },
  { value: "MENORZA", label: "Pokémons de Z-A" },
];

const Pokedex = () => {
  const {
    pokemons,
    filteredPokemons,
    types,
    buildPokemonList,
    filterByType,
    searchPokemon,
    orderPokemon,
    favoritePokemon,
    filterFavorites,
  } = useContext(PokemonContext);

  const [searchText, setSearchText] = useState("");
  const [selectedOrderFilter, setSelectedOrderFilter] = useState({});
  const [showingFavorites, setShowingFavorites] = useState(false);

  useEffect(() => {
    const loadAllPokemons = async () => {
      buildPokemonList();
      console.log(pokemons);
    };
    loadAllPokemons();
  }, []);

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchText(value);
    setShowingFavorites(false);
    searchPokemon({ searchText: value });
  };

  const loadTypes = types?.map((type, index) => (
    <S.FilterSideTypeContent
      active={type.isActive}
      key={index}
      onClick={() => {
        filterByType(index);
        setSearchText("");
      }}
    >
      <S.FilterSideTypeName type={"button"}>
        {type.name}
        {type.isActive && (
          <S.CheckedIconContent>
            <FontAwesomeIcon icon={Icon.faCheck} />
          </S.CheckedIconContent>
        )}
      </S.FilterSideTypeName>
    </S.FilterSideTypeContent>
  ));

  const loadPokemons = filteredPokemons?.map((pokemon, index) => (
    <S.PokemonContent key={index}>
      <S.FavoriteIconContent
        onClick={() => favoritePokemon(pokemon)}
        favorite={pokemon.isFavorite}
      >
        <FontAwesomeIcon icon={Icon.faHeart} />
      </S.FavoriteIconContent>
      <S.PokemonImage src={pokemon?.img} />
      <S.PokemonNumber>Nº {pokemon?.number}</S.PokemonNumber>
      <S.PokemonName>{pokemon?.name}</S.PokemonName>
      <S.PokemonCategories>
        {pokemon?.types.map((type) => (
          <S.PokemonCategory color={type?.color}>
            {type?.name}
          </S.PokemonCategory>
        ))}
      </S.PokemonCategories>
    </S.PokemonContent>
  ));

  return (
    <S.Container>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContent>
          <S.HeaderInformation>
            <S.HeaderPokeball src={pokeball} />
            <S.HeaderTitle>Pokédex</S.HeaderTitle>
          </S.HeaderInformation>
          <S.HeaderUserImage src={synviauser} />
        </S.HeaderContent>
      </S.Header>
      <S.Body>
        <S.FilterHeaderContent>
          <S.SearchInput
            type="text"
            name="searchText"
            value={searchText}
            placeholder={"Pesquisar por nome ou número"}
            onChange={handleChange}
          />
          <S.OrderContent>
            <S.OrderTitle>Ordenar por</S.OrderTitle>
            <S.OrderDropdown>
              <Select
                styles={{
                  control: () => ({
                    marginLeft: 20,
                    display: "flex",
                    flexDirection: "row",
                    width: 180,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "var(--color-red)",
                    borderRadius: 20,
                    height: 40,
                  }),
                  option: () => ({
                    color: "var(--color-red)",
                    cursor: "pointer",
                  }),
                  dropdownIndicator: () => ({
                    color: "var(--color-red)",
                  }),
                  input: () => ({
                    color: "var(--color-red)",
                  }),
                  placeholder: () => ({
                    color: "var(--color-red)",
                  }),
                }}
                onChange={(value) => {
                  setSelectedOrderFilter(value);
                  orderPokemon(value);
                }}
                name="name"
                value={selectedOrderFilter}
                options={filtersName}
              />
            </S.OrderDropdown>
          </S.OrderContent>
        </S.FilterHeaderContent>
        <S.MainContent>
          <S.FilterSideContainer>
            <S.FilterSideTitle>Filtrar por tipo</S.FilterSideTitle>
            <S.FilterSideContent>{loadTypes} </S.FilterSideContent>

            <S.FavoriteContent>
              <S.FavoriteContentTitle>Filtrar Favoritos</S.FavoriteContentTitle>
              <DragSwitch
                checked={showingFavorites}
                onColor={"var(--color-fighting"}
                onChange={(value) => {
                  setShowingFavorites(value);
                  filterFavorites(value);
                }}
              />
            </S.FavoriteContent>
          </S.FilterSideContainer>
          <S.PokemonContainer>{loadPokemons}</S.PokemonContainer>
        </S.MainContent>
      </S.Body>
    </S.Container>
  );
};

export default Pokedex;
