import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import Pokedex from "./view/Pokedex";
import PokemonProvider from "./contexts/Pokemon/PokemonContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PokemonProvider>
          <Route exact path="/" component={Pokedex} />
        </PokemonProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
