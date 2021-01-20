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

  @media screen and ${device.laptop} {
    &:hover {
      transform: scale(1.3);
    }
  }

  ${({ clear }) =>
    clear &&
    css`
      &:hover {
        transform: translateY(-50%);
      }
    `};
`;

export default ButtonIcon;
