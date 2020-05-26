import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem 1.5rem;
  width: 20rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.lightmode.colors.primary};

  &:focus ~ label {
    top: -1.3rem;
  }
`;

export default Input;
