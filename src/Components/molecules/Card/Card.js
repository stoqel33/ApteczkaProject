import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { decreaseMedicine } from 'data/Actions/medicinesActions';

import Text from 'Components/atoms/Text/Text';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import ExpiredBar from 'Components/atoms/ExpiredBar/ExpiredBar';

import pillIcon from 'assets/icons/pill.svg';
import infoIcon from 'assets/icons/info.svg';
import editIcon from 'assets/icons/edit.svg';

const showing = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 7rem 7rem;
  grid-template-rows: 4.5rem 3.5rem;
  grid-template-areas:
    'medicine info info'
    'medicine button button';

  width: 30rem;
  height: 9rem;
  padding: 0.5rem;
  margin-bottom: 2rem;

  border-radius: 2rem 2rem 0.9rem 0.9rem;
  border: 2px solid black;
  border-bottom: none;
  box-shadow: 0px 6px 10px -5px ${({ theme }) => theme.lightmode.colors.secondary};
  background-color: ${({ theme }) => theme.lightmode.colors.background};
  transition: 0.4s;

  ${({ expired }) =>
    expired &&
    css`
      box-shadow: none;
      margin-bottom: 0;
      border-radius: 2rem 2rem 0 0;
      border: 2px solid red;
      border-bottom: none;
    `}
  ${({ moreInfo }) =>
    moreInfo &&
    css`
      height: 14rem;
      grid-template-rows: 4.5rem 3.5rem 5rem;
      grid-template-areas:
        'medicine info info'
        'medicine button button'
        'date date date';
    `};
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
  ${({ date, expired }) =>
    date &&
    css`
      grid-area: date;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: ${showing} 0.4s;
      color: ${() => (expired ? 'red' : 'black')};
    `}
`;
const OuterWrapper = styled.div`
  margin: 0 1rem;
`;

const Card = ({ id, name, amount, date, today, takePill }) => {
  const [info, setInfo] = useState(false);

  const handleToggleInfo = () => {
    if (info) setInfo(false);
    else setInfo(true);
  };

  const handleTakeMedicine = () => {
    if (amount > 0) takePill(id);
  };
  const expired = today > date;
  return (
    <OuterWrapper>
      <Wrapper expired={expired} moreInfo={info}>
        <InnerWrapper medicine>
          <Text mgb="0.5rem">{name}</Text>
          <Text mgt="0.5rem">
            {amount}
            {amount > 4 && ' tabletek'}
            {amount > 1 && amount <= 4 && ' tabletki'}
            {amount === 1 && ' tabletka'}
            {amount === 0 && ' tabletek'}
          </Text>
        </InnerWrapper>
        <InnerWrapper info>
          <ButtonIcon icon={infoIcon} onClick={handleToggleInfo} />
        </InnerWrapper>
        <InnerWrapper button>
          <ButtonIcon
            icon={editIcon}
            size="2.3rem"
            as={Link}
            to={`/Apteczka/editMedicine/${id}`}
          />
          <ButtonIcon icon={pillIcon} size="2.3rem" onClick={handleTakeMedicine} />
        </InnerWrapper>
        {info && (
          <InnerWrapper date expired={expired}>
            <Text fs="1.8">Data ważności {date}</Text>
          </InnerWrapper>
        )}
      </Wrapper>
      {expired && <ExpiredBar>Minęła data ważności leku</ExpiredBar>}
    </OuterWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  takePill: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  takePill: (id) => dispatch(decreaseMedicine(id)),
});

export default connect(null, mapDispatchToProps)(Card);
