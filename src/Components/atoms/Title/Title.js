import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  grid-area: ${({ grid }) => grid || null};
  margin-top: ${({ mgt }) => mgt || 0};
  margin-left: ${({ mgl }) => mgl || 0};
  margin-right: ${({ mgr }) => mgr || 0};
  margin-bottom: ${({ mgb }) => mgb || 0};
  font-size: 2rem;
`;

export default Title;
