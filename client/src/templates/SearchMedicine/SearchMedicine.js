import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "Components/atoms/Input/Input";
import ButtonIcon from "Components/atoms/ButtonIcon/ButtonIcon";
import Card from "Components/molecules/Card/Card";

import close from "assets/icons/close.svg";

const WrapInput = styled.div`
  position: relative;
  width: 25rem;
  margin: 0 auto 2rem;
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
    width: 100rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const InputSearch = styled(Input)`
  padding: 0.5rem;
  padding-right: 3rem;
`;
const ButtonIconExit = styled(ButtonIcon)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background-color: transparent;
`;

const SearchMedicine = ({ medicines, today, handleToggle }) => {
  const [nameMed, setNameMed] = useState("");
  const value = nameMed.toLowerCase();
  const searchMedicine = medicines.filter((medicine) => {
    return medicine.name.toLowerCase().includes(value);
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseComponent);

    return () => {
      document.removeEventListener("mousedown", handleCloseComponent);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCloseComponent = (e) => {
    e.target.id === "root" && handleToggle();
  };

  const handleNameSearch = (e) => {
    setNameMed(e.target.value);
  };

  return (
    <>
      <WrapInput>
        <InputSearch
          id="search"
          type="text"
          value={nameMed}
          onChange={handleNameSearch}
          autoFocus
          autoComplete="off"
          data-testid="input"
        />
        <ButtonIconExit clear icon={close} size="1.4rem" onClick={handleToggle} />
      </WrapInput>
      <MedicinesWrap>
        {searchMedicine.map(({ _id, name, amount, expiryDate }) => (
          <Card
            key={_id}
            id={_id}
            name={name}
            amount={amount}
            date={expiryDate.slice(0, 10)}
            today={today}
          />
        ))}
      </MedicinesWrap>
    </>
  );
};

SearchMedicine.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.string,
      show: PropTypes.bool,
    }),
  ).isRequired,
  today: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

SearchMedicine.defaultProps = {
  medicines: [],
  today: new Date().toISOString(),
  handleToggle: () => {},
};

export default SearchMedicine;
