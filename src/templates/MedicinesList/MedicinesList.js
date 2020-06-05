import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from 'Components/molecules/Card/Card';
import Button from 'Components/atoms/Button/Button';
import Title from 'Components/atoms/Title/Title';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';
import SearchMedicine from 'templates/SearchMedicine/SearchMedicine';

import search from 'assets/icons/search.svg';
import burger from 'assets/icons/burger-menu.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;
const TopBarWrap = styled.div`
  display: flex;
  justify-content: space-around;
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
  height: 100%;
  margin: 5rem auto 0;
  padding: 1rem;
  line-height: 100%;
`;

const MedicinesList = ({ searchToggle, searching, today, medicines }) => {
  return (
    <Wrapper>
      <TopBarWrap>
        <Icon onClick={searchToggle}>
          {medicines.length > 0 && <ButtonIcon icon={search} size="2.8rem" />}
        </Icon>
        <Title fs="3">Apteczka</Title>
        <Icon>
          <ButtonIcon icon={burger} size="2.8rem" />
        </Icon>
      </TopBarWrap>
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
            <Title>Brak leków</Title>
          )}
        </MedicinesWrap>
      )}
      <ButtonLink big="true" as={Link} to="/ApteczkaProject/addMedicine">
        Dodaj nowy lek
      </ButtonLink>
    </Wrapper>
  );
};

MedicinesList.propTypes = {
  searchToggle: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
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
