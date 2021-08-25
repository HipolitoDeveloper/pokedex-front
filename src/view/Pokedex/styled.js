import styled from "styled-components";

export const Container = styled.body`
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-white);
`;

export const Content = styled.div`
  border: 30px solid black;
  margin: 5px;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 0 140px 0 140px;
  width: 100%;
  height: 100px;
  background-color: var(--color-fighting);
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-shadow: 1px 6px 17px 5px #000000;
  box-shadow: 1px -10px 17px 5px #000000;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  margin-left: 20px;

  font-size: 30px;
  color: var(--color-white);
  font-weight: bold;
`;

export const HeaderPokeball = styled.img``;

export const HeaderUserImage = styled.img`
  cursor: pointer;
`;

export const Body = styled.div`
  padding: 60px 140px 0 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1190px) {
    grid-template-columns: auto auto auto;
    padding: 60px 20px 0 20px;
  }
`;

export const FilterHeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  padding: 20px;
  background-color: var(--color-light-gray);
  border-radius: 20px;
  color: var(--color-dark-gray);

  width: 40%;
  height: 40px;
`;

export const OrderContent = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OrderTitle = styled.span`
  color: var(--color-dark-gray);
`;

export const OrderDropdown = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const MainContent = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const FilterSideContainer = styled.aside`
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
`;

export const FilterSideContent = styled.div`
  margin-top: 20px;
  display: grid;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  grid-template-columns: auto auto;
`;

export const FilterSideTitle = styled.span`
  font-size: 16px;
  color: var(--color-dark-gray);
`;

export const FilterSideTypeContent = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-red)"};
  border: 1px solid var(--color-fighting);
  border-radius: 50px;
  background-color: ${(props) =>
    props.active ? "var(--color-fighting)" : "none"};

  transition: 0.5s all;
`;

export const FilterSideTypeName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckedIconContent = styled.div`
  margin-left: 5px;
`;

export const PokemonContainer = styled.div`
  height: 500px;
  width: 82%;
  overflow-y: scroll;
  display: grid;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  grid-template-columns: auto auto auto auto;
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
  }
  ::-webkit-scrollbar {
    background-color: var(--color-red);
    height: 0;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-red);
    height: 50%;
  }

  @media (max-width: 1190px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: 300px 300px;
  }

  @media (max-width: 720px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: 250px 250px;
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: auto;
  }
`;

export const PokemonContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start; ;
`;

export const FavoriteIconContent = styled.div`
  width: 100%;
  cursor: pointer;

  svg {
    float: right;
    color: ${(props) =>
      props.favorite ? "var(--color-red)" : "var(--color-light-gray)"};

    transition: 1s all;
  }
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const PokemonNumber = styled.span`
  color: var(--color-light-gray);
  font-size: 14px;
`;

export const PokemonName = styled.span`
  color: var(--color-font);
  font-size: 14px;
`;

export const PokemonCategories = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
`;

export const PokemonCategory = styled.div`
  margin-right: 1px;
  font-size: 14px;
  background-color: ${(props) => `var(${props.color})`};
  color: var(--color-white);
  border-radius: 10px;
  padding: 5px;
`;

export const FavoriteContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FavoriteContentTitle = styled.span`
  font-size: 16px;
  color: var(--color-dark-gray);
`;

export const FavoriteContentButton = styled.div``;
