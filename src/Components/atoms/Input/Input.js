import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 1rem 2rem;
  width: 25rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.lightmode.colors.primary};
  font-size: 2rem;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.lightmode.colors.secondary};
    border-radius: 1rem;
    outline: none;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 0.8rem;
    left: 50%;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.lightmode.colors.secondary};
  }

  &[type='date'] {
    font-size: 1.5rem;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.warning};
      & + label {
        color: ${({ theme }) => theme.warning};
      }
    `}

  ${({ expired }) =>
    expired &&
    css`
      border-color: ${({ theme }) => theme.warning};
      color: ${({ theme }) => theme.warning};
      & + label {
        color: ${({ theme }) => theme.warning};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: transparent;
      text-align: center;
    `}
`;

export default Input;
