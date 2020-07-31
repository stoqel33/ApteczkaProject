import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { decreaseMedicine } from 'data/Actions/medicinesActions';

import Text from 'Components/atoms/Text/Text';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';

import pillIcon from 'assets/icons/pill.svg';
import editIcon from 'assets/icons/edit.svg';
import infoIcon from 'assets/icons/information.svg';

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

  border-radius: 2rem 2rem 0.9rem 0.9rem;
  border-bottom: none;
  box-shadow: 0px 6px 10px -5px ${({ theme }) => theme.lightmode.colors.secondary};
  background: linear-gradient(15deg, rgb(167, 206, 246) 50%, rgb(154, 197, 230) 50%);
  z-index: 1;
  transition: 0.4s;

  ${({ expired }) =>
    expired &&
    css`
      box-shadow: 0 6px 10px -5px red;
    `}
  ${({ moreInfo }) =>
    moreInfo &&
    css`
      margin-bottom: 0;
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
`;
const OuterWrapper = styled.div`
  position: relative;
  margin: 0 1rem 2rem 1rem;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 767px) {
    ${({ info }) =>
      info &&
      css`
        margin-bottom: 5rem;
      `}
  }
`;
const DateInfo = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 3rem;
  width: 85%;
  padding-top: 0.5rem;

  background-color: ${({ theme }) => theme.lightmode.colors.secondary};
  box-shadow: 0 6px 10px -5px ${({ theme }) => theme.lightmode.colors.secondary};
  border-radius: 0 0 10px 10px;
  transition: 0.5s;
  z-index: -5;

  ${({ show }) =>
    show &&
    css`
      bottom: -3rem;
    `}
  ${({ expired }) =>
    expired &&
    css`
      background-color: red;
      box-shadow: 0 6px 10px -5px red;
    `}
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
    <OuterWrapper info={info}>
      <Wrapper expired={expired} moreInfo={info}>
        <InnerWrapper medicine>
          <Text mgb="0.5rem" fw="600">
            {name}
          </Text>
          <Text mgt="0.5rem">Ilość {amount}</Text>
        </InnerWrapper>
        <InnerWrapper info>
          <ButtonIcon icon={infoIcon} size="2rem" onClick={handleToggleInfo} />
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
        <DateInfo show={info} expired={expired}>
          <Text fs="1.5">Data ważności {date}</Text>
        </DateInfo>
      </Wrapper>
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
