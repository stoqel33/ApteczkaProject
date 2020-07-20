import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;
const TopBarWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 2rem 0;
`;
const Icon = styled.div`
  top: 15px;
  cursor: pointer;
`;
const MedicinesWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ButtonLink = styled(Button)`
  height: 10%;
  margin: 5rem auto 2rem;
  padding: 1rem;
  line-height: 100%;
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
`;

const MedicinesList = ({
  searchToggle,
  burgerToggle,
  searching,
  burgerMenu,
  today,
  medicines,
}) => {
  const TopBar = (
    <TopBarWrap>
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
            <>
              <Image />
              <Text mgt="2rem">Twoja apteczka jest pusta</Text>
            </>
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
      <BurgerMenu open={burgerMenu} />
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
