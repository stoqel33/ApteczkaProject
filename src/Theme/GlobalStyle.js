import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.lightmode.colors.background};
    color: ${({ theme }) => theme.lightmode.colors.primary};
    min-height: 100vh;

    @media screen and (min-width: 1000px) {
        max-width: 100rem;
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
