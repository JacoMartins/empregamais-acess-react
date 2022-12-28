import styled, { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --header: #fff;
    --green-800: #81D3B5;
    --green-500: #5FB69A;
    --green-250: #3F8E68;
    --green-150: #2B4739;
    --blue-800: #91C9F3;
    --blue-500: #43A0F5;
    --blue-250: #2A5FBA;

    --gray-50: #F7FAFC;
    --gray-100: #EDF2F7;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #4A5568;
    --gray-700: #2D3748;
    --gray-800: #1A202C;
    --gray-900: #171923;

    --red-50: #FFF5F5;
    --red-100: #FED7D7;
    --red-200: #FEB2B2;
    --red-300: #FC8181;
    --red-400: #F56565;
    --red-500: #E53E3E;
    --red-600: #C53030;
    --red-700: #9B2C2C;
    --red-800: #822727;
    --red-900: #63171B;

    --orange-50: #FFFAF0;
    --orange-100: #FEEBC8;
    --orange-200: #FBD38D;
    --orange-300: #F6AD55;
    --orange-400: #ED8936;
    --orange-500: #DD6B20;
    --orange-600: #C05621;
    --orange-700: #9C4221;
    --orange-800: #7B341E;
    --orange-900: #652B19;

    --yellow-50: #FFFFF0;
    --yellow-100: #FEFCBF;
    --yellow-200: #FAF089;
    --yellow-300: #F6E05E;
    --yellow-400: #ECC94B;
    --yellow-500: #D69E2E;
    --yellow-600: #B7791F;
    --yellow-700: #975A16;
    --yellow-800: #744210;
    --yellow-900: #5F370E;

    --chakra-green-50: #F0FFF4;
    --chakra-green-100: #C6F6D5;
    --chakra-green-200: #9AE6B4;
    --chakra-green-300: #68D391;
    --chakra-green-400: #48BB78;
    --chakra-green-500: #38A169;
    --chakra-green-600: #2F855A;
    --chakra-green-700: #276749;
    --chakra-green-800: #22543D;
    --chakra-green-900: #1C4532;

    --teal-50: #E6FFFA;
    --teal-100: #B2F5EA;
    --teal-200: #81E6D9;
    --teal-300: #4FD1C5;
    --teal-400: #38B2AC;
    --teal-500: #319795;
    --teal-600: #2C7A7B;
    --teal-700: #285E61;
    --teal-800: #234E52;
    --teal-900: #1D4044;

    --dark-blue-50: #EBF8FF;
    --dark-blue-100: #BEE3F8;
    --dark-blue-200: #90CDF4;
    --dark-blue-300: #63B3ED;
    --dark-blue-400: #4299E1;
    --dark-blue-500: #3182CE;
    --dark-blue-600: #2B6CB0;
    --dark-blue-700: #2C5282;
    --dark-blue-800: #2A4365;
    --dark-blue-900: #1A365D;

    --cyan-50: #EDFDFD;
    --cyan-100: #C4F1F9;
    --cyan-200: #9DECF9;
    --cyan-300: #76E4F7;
    --cyan-400: #0BC5EA;
    --cyan-500: #00B5D8;
    --cyan-600: #00A3C4;
    --cyan-700: #0987A0;
    --cyan-800: #086F83;
    --cyan-900: #065666;

    --purple-50: #FAF5FF;
    --purple-100: #E9D8FD;
    --purple-200: #D6BCFA;
    --purple-300: #B794F4;
    --purple-400: #9F7AEA;
    --purple-500: #805AD5;
    --purple-600: #6B46C1;
    --purple-700: #553C9A;
    --purple-800: #44337A;
    --purple-900: #322659;

    --pink-50: #FFF5F7;
    --pink-100: #FED7E2;
    --pink-200: #FBB6CE;
    --pink-300: #F687B3;
    --pink-400: #ED64A6;
    --pink-500: #D53F8C;
    --pink-600: #B83280;
    --pink-700: #97266D;
    --pink-800: #702459;
    --pink-900: #521B41;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--dark-mode-background);
    -webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-family: Heveltica, 'Inter', Arial, sans-serif;
    letter-spacing: -0.0625rem;
    font-weight: 400;
    color: var(--dark-mode-text-850);
    font-size: 1.0625rem;
 
    
    @media screen and (max-width: 720px) {
      font-size: calc(1.0625rem + 0.125rem);  
      border-radius: 0.5rem;
    }
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: transparent;
    color: black;
    outline: none;
    transition: 0.15s;
    font-weight: 500;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);

    &:focus {
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
    
    &::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .searchInput {
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: transparent;
    color: black;
    outline: none;
    transition: 0.1s;
    font-weight: 600;
    &:focus {
      outline: solid 2px rgba(255, 255, 255, 0.45);
    }
    
    &::placeholder {
      color: black;
    }
  }

  button {
    border: 2px solid white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: white;
    color: var(--green-250);
    outline: solid 0px rgba(255, 255, 255, 0.25);
    font-weight: 600;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      filter: brightness(0.90);
    }
    &:active {
      outline: solid 2px rgba(255, 255, 255, 0.45);
      filter: brightness(1);
    }
  }

  .text-decoration-none {
    text-decoration: none;
  }
  
  h1 {
    font-weight: 600;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h3 {
    font-weight: 600;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .blocks {
    display: grid;
    grid-template-columns: repeat(auto-fill, 14.375rem);
    gap: 1rem;
    width: auto;
    text-align: left;

    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, 12rem);
    }
  }

  .blocks-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    width: auto;
    text-align: left;

    @media screen and (max-width: 720px) {
      justify-content: center;
    }
  }

  .row + .row {
    margin-top: 1rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--gray-100);
    width: 0.125rem;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 3px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.15);
    width: 2px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-400);
  }
`;

export const Main = styled.main`
  padding: 0 10rem;

  @media screen and (max-width: 992px) {
    padding: 0 2rem;
  }
`;