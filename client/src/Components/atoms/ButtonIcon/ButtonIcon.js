import styled, { css } from "styled-components";
import { device } from "Theme/mainTheme";

const ButtonIcon = styled.button`
  width: ${({ size }) => size || "1.6rem"};
  height: ${({ size }) => size || "1.6rem"};
  background-image: url(${({ icon }) => icon});
  background-color: transparent;
  border: none;
  transition: 0.15s ease-in;
  cursor: pointer;

  @media ${device.laptop} {
    &:hover {
      transform: scale(1.3);
      filter: drop-shadow(1px 3px 10px black);
    }

    ${({ clear }) =>
      clear &&
      css`
        &:hover {
          transform: translateY(-50%);
          filter: none;
        }
      `};
    ${({ filterOff }) =>
      filterOff &&
      css`
        &:hover {
          filter: none;
        }
      `};
    ${({ filterBin }) =>
      filterBin &&
      css`
        &:hover {
          filter: drop-shadow(1px 3px 15px black);
        }
      `};
  }
`;

export default ButtonIcon;
