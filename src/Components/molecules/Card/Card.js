import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Title from 'Components/atoms/Title/Title';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import ExpiredBar from 'Components/atoms/ExpiredBar/ExpiredBar';

import pillIcon from 'assets/icons/pill.svg';
import infoIcon from 'assets/icons/info.svg';
import editIcon from 'assets/icons/edit.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7rem 7rem;
  grid-template-rows: 3.5rem 3.5rem;
  grid-template-areas:
    'medicine info info'
    'medicine button button';

  width: 30rem;
  height: 8rem;
  padding: 0.5rem;
  border-radius: ${({ expired }) =>
    expired ? '2rem 2rem 0 0' : ' 2rem 2rem 0.9rem 0.9rem'};
  border: ${({ expired }) => (expired ? '2px solid red' : '2px solid black')};
  border-bottom: none;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
`;

const InnerWrapper = styled.div`
  ${({ medicine }) =>
    medicine &&
    css`
      grid-area: medicine;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
    `}
  ${({ button }) =>
    button &&
    css`
      grid-area: button;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `}
    ${({ info }) =>
      info &&
      css`
        grid-area: info;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: 0.5rem;
        margin-top: 0.3rem;
      `}
`;

const Card = ({ name, amount, expired }) => {
  return (
    <>
      <Wrapper expired={expired}>
        <InnerWrapper medicine>
          <Title mgb="0.5rem">{name}</Title>
          <Title mgt="0.5rem">{amount} tabletek</Title>
        </InnerWrapper>
        <InnerWrapper info>
          <ButtonIcon icon={infoIcon} />
        </InnerWrapper>
        <InnerWrapper button>
          <ButtonIcon icon={editIcon} size="2.3rem" />
          <ButtonIcon icon={pillIcon} size="2.3rem" />
        </InnerWrapper>
      </Wrapper>
      {expired && <ExpiredBar>Minęła data ważności leku</ExpiredBar>}
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  expired: PropTypes.bool,
};

Card.defaultProps = {
  expired: false,
};

export default Card;
