import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: ${({ size }) => size || '1.6rem'};
  height: ${({ size }) => size || '1.6rem'};
  background-image: url(${({ icon }) => icon});
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default ButtonIcon;
