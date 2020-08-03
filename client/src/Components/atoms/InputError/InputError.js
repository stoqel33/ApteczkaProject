import styled from 'styled-components';

const InputError = styled.span`
  position: absolute;
  display: inline-block;
  bottom: 0.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.warning};
`;

export default InputError;
