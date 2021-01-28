import { createGlobalStyle } from "styled-components/macro";
import { device } from "Theme/mainTheme";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.lightmode.colors.background};
    color: ${({ theme }) => theme.lightmode.colors.primary};
    height: ${(props) =>
      props.windowHeightDimension ? props.windowHeightDimension.height : "700"}px;

    @media screen and ${device.laptop} {
        margin: 0 auto;
      }

    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    }
    
  #root{
    height: 100%;
  }

  ::selection{
    background-color: ${({ theme }) => theme.lightmode.colors.secondary};
  }

  input{
    outline: none;
    font-family: 'Montserrat', sans-serif;
    -webkit-appearance: none;
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
