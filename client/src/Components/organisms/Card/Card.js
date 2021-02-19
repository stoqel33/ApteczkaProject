import React, { useState, useReducer } from "react";
import styled, { css, keyframes } from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { decreaseMedicine } from "data/Actions/medicinesActions";
import { device } from "Theme/mainTheme";

import Text from "Components/atoms/Text/Text";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon";

import pillIcon from "assets/icons/pill.svg";
import editIcon from "assets/icons/edit.svg";
import infoIcon from "assets/icons/information.svg";

const diminishAnimation = keyframes`
  0%, 80% {
    transform: scale(1);
  }

  30%{
    transform: scale(.85);
    
  }

  50%{
    transform: scale(1.10);

  }
`;
const failDiminishAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 7rem 7rem;
  grid-template-rows: 5rem 3rem;
  grid-template-areas:
    "medicine medicine info"
    "amount button button";

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
  ${({ diminishAnimate }) =>
    diminishAnimate &&
    css`
      animation: ${diminishAnimation} 1s;
    `};
  ${({ failDiminishAnimate }) =>
    failDiminishAnimate &&
    css`
      animation: ${failDiminishAnimation} 0.4s;
    `};
`;
const InnerWrapper = styled.div`
  ${({ medicine }) =>
    medicine &&
    css`
      grid-area: medicine;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      word-break: break-word;
    `}
    ${({ amount }) =>
      amount &&
      css`
        grid-area: amount;
        display: flex;
        justify-content: center;
        align-items: center;
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

  &:nth-last-child(1) {
    margin-bottom: 5rem;
  }

  ${({ animationDuring }) =>
    animationDuring &&
    css`
      pointer-events: none;
    `};
  ${({ info }) =>
    info &&
    css`
      margin-bottom: 4.5rem;
    `}

  @media ${device.tablet} {
    margin-bottom: 5rem;
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
  ${({ diminishAnimate, failDiminishAnimate }) =>
    (diminishAnimate || failDiminishAnimate) &&
    css`
      display: none;
      opacity: 0;
    `};
  ${({ diminishAnimate, failDiminishAnimate, show }) =>
    (diminishAnimate || failDiminishAnimate) &&
    show &&
    css`
      display: block;
      opacity: 1;
    `};
`;

const Card = ({ id, name, amount, date, today, takePill }) => {
  const [info, setInfo] = useState(false);
  const animationNames = {
    during: "animationDuring",
    diminish: "diminishAnimate",
    failDiminish: "failDiminishAnimate",
  };

  const [animationStatus, setAnimationStatus] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      animationDuring: false,
      diminishAnimate: false,
      failDiminishAnimate: false,
    },
  );

  const handleAnimationOn = (animation) => {
    setAnimationStatus({
      [animation]: true,
    });
  };

  const handleAnimationOff = (animation) => {
    setAnimationStatus({
      [animation]: false,
    });
  };

  const handleAnimationStart = () => {
    handleAnimationOn(animationNames.during);
  };

  const handleAnimationEnd = () => {
    handleAnimationOff(animationNames.during);
    animationStatus.diminishAnimate && handleAnimationOff(animationNames.diminish);
    animationStatus.failDiminishAnimate &&
      handleAnimationOff(animationNames.failDiminish);
  };

  const handleTakeMedicine = () => {
    if (amount > 0) {
      takePill(id);
      handleAnimationOn(animationNames.diminish);
    } else handleAnimationOn(animationNames.failDiminish);
  };

  const handleToggleInfo = () => {
    info ? setInfo(false) : setInfo(true);
  };

  const formatShowingDate = (date) => {
    const fullDate = date.split("-");
    const year = fullDate[0];
    const month = fullDate[1];
    const day = fullDate[2];
    return `${day}-${month}-${year}`;
  };

  const fomratedDate = formatShowingDate(date);

  const expired = today > date;

  return (
    <OuterWrapper
      info={info}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      animationDuring={animationStatus.animationDuring}
    >
      <Wrapper
        expired={expired}
        moreInfo={info}
        diminishAnimate={animationStatus.diminishAnimate}
        failDiminishAnimate={animationStatus.failDiminishAnimate}
      >
        <InnerWrapper medicine>
          <Text fw="600">{name}</Text>
        </InnerWrapper>
        <InnerWrapper amount>
          <Text>Ilość {amount}</Text>
        </InnerWrapper>
        <InnerWrapper info>
          <ButtonIcon icon={infoIcon} size="2rem" onClick={handleToggleInfo} />
        </InnerWrapper>
        <InnerWrapper button>
          <ButtonIcon
            icon={editIcon}
            size="2.5rem"
            as={Link}
            to={`/Apteczka/editMedicine/${id}`}
          />
          <ButtonIcon icon={pillIcon} size="2.5rem" onClick={handleTakeMedicine} />
        </InnerWrapper>
        <DateInfo
          show={info}
          expired={expired}
          diminishAnimate={animationStatus.diminishAnimate}
          failDiminishAnimate={animationStatus.failDiminishAnimate}
        >
          <Text fs="1.5" fw="600" cl="white">
            Data ważności {fomratedDate}
          </Text>
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

Card.defaultProps = {
  id: "",
  name: "",
  amount: "",
  date: "",
  today: "",
  takePill: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  takePill: (id) => dispatch(decreaseMedicine(id)),
});

export default connect(null, mapDispatchToProps)(Card);
