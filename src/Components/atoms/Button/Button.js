import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  height: 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.lightmode.colors.primary};
  border: 2px solid black;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
  text-align: center;
  text-decoration: none;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `};
`;

export default Button;
