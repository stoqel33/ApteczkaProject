import styled, { css } from "styled-components";

const Input = styled.input`
  display: inline-block;
  padding: 1rem 2rem;
  width: 25rem;
  border-radius: 1rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.lightmode.colors.primary};
  font-size: 2rem;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
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
    transition: .3s ease-in-out;
  }

  &[type='date'] {
    font-size: 1.5rem;
  }

  &-internal-autofill-selected{
    background-color: red !important;
  }

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

  ${({ user }) =>
    user &&
    css`
      position: relative;
      width: 30rem;
      font-size: 1.8rem;
      border: none;
      border-top: 2px solid ${({ theme }) => theme.lightmode.colors.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.lightmode.colors.secondary};

      text-transform: none;
      background-color: transparent;
      border-radius: 0;

      &:focus {
        border: none;
        border-radius: 0;
        border-top: 1px solid ${({ theme }) => theme.lightmode.colors.secondary};
        border-bottom: 1px solid ${({ theme }) => theme.lightmode.colors.secondary};
      }

      @media screen and (max-width: 1024px) {
        &[type="date"]::-webkit-inner-spin-button {
          position: absolute;
          -webkit-appearance: none;
          display: none;
        }

        &[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          -webkit-appearance: none;
          display: none;
        }
      }

      @media screen and (min-width: 1024px) {
        &[type="date"]::-webkit-inner-spin-button {
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          cursor: pointer;
        }

        &[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
    `}

    ${({ errorUser }) =>
      errorUser &&
      css`
        border-color: ${({ theme }) => theme.warning};
        color: ${({ theme }) => theme.warning};

        &:focus {
          border: none;
          border-radius: 0;
          border-top: 1px solid ${({ theme }) => theme.warning};
          border-bottom: 1px solid ${({ theme }) => theme.warning};

          & + label {
            color: ${({ theme }) => theme.warning};
          }
        }

        & + label {
          color: ${({ theme }) => theme.warning};
        }
      `}
    
    ${({ error }) =>
      error &&
      css`
        border-color: ${({ theme }) => theme.warning};
        color: ${({ theme }) => theme.warning};

        &:focus {
          & + label {
            color: ${({ theme }) => theme.warning};
          }
        }

        & + label {
          color: ${({ theme }) => theme.warning};
        }
      `};
`;

export default Input;
