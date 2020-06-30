import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  height: 4rem;
  width: 12rem;
  font-size: ${({ fs }) => fs || '1.4'}rem;
  font-weight: 400;
  color: ${({ theme }) => theme.lightmode.colors.primary};
  border: 2px solid ${({ theme }) => theme.lightmode.colors.secondary};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
  text-align: center;
  text-decoration: none;

  margin-top: ${({ mgt }) => mgt || '0'};
  margin-right: ${({ mgr }) => mgr || '0'};
  margin-bottom: ${({ mgb }) => mgb || '0'};
  margin-left: ${({ mgl }) => mgl || '0'};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.lightmode.secondary};
    `};
  ${({ big }) =>
    big &&
    css`
      width: 22rem;
      height: 6rem;
      font-size: 1.8rem;
    `};
  ${({ info }) =>
    info &&
    css`
      border: none;
      color: ${({ theme }) => theme.info};
    `};
`;

export default Button;
