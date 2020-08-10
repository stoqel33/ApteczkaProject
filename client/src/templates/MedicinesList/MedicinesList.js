import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { device } from 'Theme/mainTheme';

import Card from 'Components/molecules/Card/Card';
import Button from 'Components/atoms/Button/Button';
import Title from 'Components/atoms/Title/Title';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import SearchMedicine from 'templates/SearchMedicine/SearchMedicine';
import BurgerMenu from 'templates/BurgerMenu/BurgerMenu';
import Burger from 'Components/atoms/Burger/Burger';
import Text from 'Components/atoms/Text/Text';

import search from 'assets/icons/search.svg';
import imgXsEmpty from 'assets/image/xsmall-empty.png';
import imgSEmpty from 'assets/image/small-empty.png';
import imgMEmpty from 'assets/image/medium-empty.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  transition: 1s;
`;
const TopBarWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 2rem 0;

  @media screen and ${device.laptop} {
    grid-template-columns: 1fr 20rem 1fr;
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

  @media screen and ${device.tablet} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and ${device.laptop} {
    width: 100rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const ButtonLink = styled(Button)`
  margin: 5rem auto 5rem;
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

  @media screen and (${device.mobileM}) {
    width: 22rem;
    height: 22rem;
    background-image: url(${imgSEmpty});
  }
  @media screen and (${device.tablet}) {
    width: 30rem;
    height: 30rem;
    background-image: url(${imgMEmpty});
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MedicinesList = ({
  searchToggle,
  burgerToggle,
  searching,
  burgerMenu,
  today,
  medicines,
}) => {
  const [heightTop, setHeightTop] = useState(0);
  useEffect(() => {
    const height = document.getElementById('topBar').offsetHeight + 30;
    setHeightTop(height);
  }, []);

  const TopBar = (
    <TopBarWrap id="topBar">
      <Icon onClick={searchToggle}>
        {medicines.length > 0 && !burgerMenu && (
          <ButtonIcon icon={search} size="2.8rem" />
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
              <Text mgt="2rem">Twoja apteczka jest pusta</Text>
            </InnerWrapper>
          )}
        </MedicinesWrap>
      )}
    </>
  );

  const ButtonAdd = (
    <>
      {!searching && (
        <ButtonLink big="true" as={Link} to="/Apteczka/addMedicine">
          Dodaj nowy lek
        </ButtonLink>
      )}
    </>
  );

  return (
    <Wrapper>
      {TopBar}
      <BurgerMenu open={burgerMenu} height={heightTop} />
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

export default MedicinesList;