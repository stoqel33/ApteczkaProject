import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  grid-area: ${({ grid }) => grid || null};
  margin-top: ${({ mgt }) => mgt || 0};
  margin-left: ${({ mgl }) => mgl || 0};
  margin-right: ${({ mgr }) => mgr || 0};
  margin-bottom: ${({ mgb }) => mgb || 0};
  font-size: ${({ fs }) => fs || 2}rem;
  font-weight: ${({ fw }) => fw || 600};
`;

export default Title;
