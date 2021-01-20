import styled, { css } from "styled-components";
import { device } from "Theme/mainTheme";

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  height: 4rem;
  width: 14rem;
  font-size: ${({ fs }) => fs || "1.4"}rem;
  font-weight: 600;
  color: white;
  border: transparent;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.secondary};
  text-align: center;
  text-decoration: none;
  transition: 0.15s;
  cursor: pointer;

  margin-top: ${({ mgt }) => mgt || "0"};
  margin-right: ${({ mgr }) => mgr || "0"};
  margin-bottom: ${({ mgb }) => mgb || "0"};
  margin-left: ${({ mgl }) => mgl || "0"};

  &:hover {
    box-shadow: 0 0 8px rgba(33, 33, 33, 0.2);
  }
  ${({ primary }) =>
    primary &&
    css`
      height: 4.5rem;
      width: 20rem;
      font-size: 1.7rem;
    `};
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.info};
    `};
  ${({ big }) =>
    big &&
    css`
      width: 22rem;
      height: 5rem;
      font-size: 1.8rem;
      line-height: 5rem;
    `};
  ${({ info }) =>
    info &&
    css`
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.info};
      &:hover {
        box-shadow: none;

        @media screen and ${device.laptop} {
          transform: scale(1.2);
        }
      }
    `};
  ${({ warning }) =>
    warning &&
    css`
      background-color: ${({ theme }) => theme.warning};
    `};
`;

export default Button;
