import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, rgba(97,13,103,1) 41%, rgba(167,98,98,1) 100%);
    min-height: 100vh;

    @media screen and (min-width: 800px) {
        max-width: 800px;
        margin: 0 auto;
      }
    }

  textarea:focus,
  input:focus,
  button:focus {
    outline: none;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
