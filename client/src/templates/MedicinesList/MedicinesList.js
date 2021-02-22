import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { device } from "Theme/mainTheme";

import Card from "Components/organisms/Card/Card";
import Button from "Components/atoms/Button/Button";
import Title from "Components/atoms/Title/Title";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon";
import SearchMedicine from "templates/SearchMedicine/SearchMedicine";
import BurgerMenu from "templates/BurgerMenu/BurgerMenu";
import Burger from "Components/molecules/Burger/Burger";
import Text from "Components/atoms/Text/Text";
import Load from "Components/molecules/Load/Load";

import search from "assets/icons/search.svg";
import imgXsEmpty from "assets/image/xsmall-empty.png";
import imgSEmpty from "assets/image/small-empty.png";
import imgMEmpty from "assets/image/medium-empty.png";

const showingImage = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: min-content;
  text-align: center;
  transition: 1s;
`;
const TopBarWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  justify-items: center;
  align-items: center;
  margin: 2rem 0;

  @media ${device.laptop} {
    grid-template-columns: 1fr 20rem 1fr;
    margin-bottom: 4rem;
  }
`;
const Icon = styled.div`
  top: 15px;
  cursor: pointer;
`;
const MedicinesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media ${device.laptop} {
    width: 100rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const ButtonLink = styled(Button)`
  margin: 5rem auto 5rem;

  &:last-of-type {
    margin-top: auto;
  }
`;
const TitleApp = styled(Title)`
  color: ${({ theme }) => theme.lightmode.colors.secondary};
`;
const Image = styled.div`
  width: 17rem;
  height: 17rem;
  margin: 5rem auto;

  background-image: url(${imgXsEmpty});
  background-repeat: no-repeat;
  background-position-x: center;

  @media ${device.mobileM} {
    width: 22rem;
    height: 22rem;
    background-image: url(${imgSEmpty});
  }
  @media ${device.tablet} {
    width: 27rem;
    height: 27rem;
    background-image: url(${imgMEmpty});
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  animation: ${showingImage} 0.9s ease-out;
`;

const MedicinesList = ({
  searchToggle,
  burgerToggle,
  searching,
  burgerMenu,
  today,
  medicines,
  loading,
}) => {
  const [heightTop, setHeightTop] = useState(0);
  useEffect(() => {
    const height = document.getElementById("topBar").offsetHeight + 30;
    setHeightTop(height);
  }, []);

  const TopBar = (
    <TopBarWrap id="topBar">
      <Icon onClick={searchToggle}>
        {medicines.length > 0 && !burgerMenu && (
          <ButtonIcon filterOff icon={search} size="2.8rem" />
        )}
      </Icon>
      <TitleApp fs="3">Apteczka</TitleApp>
      <Icon onClick={burgerToggle}>
        <Burger open={burgerMenu} change={burgerToggle} />
      </Icon>
    </TopBarWrap>
  );

  const Medicines = (
    <>
      {searching ? (
        <SearchMedicine medicines={medicines} today={today} handleToggle={searchToggle} />
      ) : (
        <MedicinesWrap>
          {medicines.length > 0 ? (
            medicines.map(({ name, amount, expiryDate, _id }) => (
              <Card
                key={_id}
                id={_id}
                name={name}
                amount={amount}
                date={expiryDate.slice(0, 10)}
                today={today}
              />
            ))
          ) : (
            <InnerWrapper>
              <Image />
              <Text mgl="2rem" mgr="2rem">
                Apteczka jest pusta. Kliknij przycisk "Dodaj nowy lek" aby dodać pierwszy
                lek
              </Text>
            </InnerWrapper>
          )}
        </MedicinesWrap>
      )}
    </>
  );

  const ButtonAdd = (
    <>
      {!searching && (
        <ButtonLink as={Link} to="/Apteczka/addMedicine" big="true">
          Dodaj nowy lek
        </ButtonLink>
      )}
    </>
  );

  return (
    <Wrapper>
      {TopBar}
      <BurgerMenu open={burgerMenu} height={heightTop} />
      {loading && <Load />}
      {Medicines}
      {ButtonAdd}
    </Wrapper>
  );
};

MedicinesList.propTypes = {
  searchToggle: PropTypes.func.isRequired,
  burgerToggle: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
  burgerMenu: PropTypes.bool.isRequired,
  today: PropTypes.string.isRequired,
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MedicinesList.defaultProps = {
  burgerToggle: () => {},
  searchToggle: () => {},
  searching: false,
  burgerMenu: false,
  today: new Date().toISOString(),
  medicines: [],
  loading: false,
};

export default MedicinesList;
