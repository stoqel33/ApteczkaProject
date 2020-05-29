import styled, { css } from 'styled-components';

const ExpiredBar = styled.div`
  width: 30rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
  color: ${({ theme }) => theme.lightmode.colors.primary};
  border-radius: 0 0 0.9rem 0.9rem;
  border: 0.2rem solid red;
  border-top: 0.2rem dotted red;
  text-align: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  ${({ notExpiredYet }) =>
    notExpiredYet &&
    css`
      border: 0.2rem dotted yellow;
    `}
`;

export default ExpiredBar;
