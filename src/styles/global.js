import { createGlobalStyle } from "styled-components";
import TitilliumWebRegular from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${TitilliumWebRegular}
  :root {
    --color-font: #333333;
    --color-dark-gray: #828282;
    --color-light-gray: #F2F2F2;
    --color-red: #E2350D;
    --color-white: #FFFFFF;
    --color-fire: #EE7F33;
    --color-normal: #A9A778;
    --color-water: #6890F0;
    --color-grass: #78C84F;
    --color-ice: #98D8D7;
    --color-poison: #A040A1;
    --color-ground: #E0C069;
    --color-flying: #A790EF;
    --color-bug: #A8B821;
    --color-rock: #B6A037;
    --color-ghost: #705797;
    --color-dragon: #724EF9;
    --color-dark: #6F5848;
    --color-steel: #B8B8D0;
    --color-fairy: #F4C8E2;
    --color-psychic: #E95587;
    --color-electric: #F8CF32;
    --color-fighting: #C03228;    
  }



  * {
   
    
    margin: 0;
    padding: 0;
 
    box-sizing: border-box;
    font-family:  'Titillium Web';
  }




  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    box-shadow: 0 0 0 0;
    outline: 0;
    border: none;
    background-color: transparent;

  }



  button, input, select {
    cursor: pointer;

  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--color-background) inset;
    box-shadow: 0 0 0 30px var(--color-background) inset;
    background-color: transparent;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--color-text) !important;
    background-color: transparent;

  }




`;

export default GlobalStyle;
