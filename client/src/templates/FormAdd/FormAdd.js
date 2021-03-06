import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMedicines } from "data/Actions/medicinesActions";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { device } from "Theme/mainTheme";

import Title from "Components/atoms/Title/Title";
import InputError from "Components/atoms/InputError/InputError";
import Label from "Components/atoms/Label/Label";
import Button from "Components/atoms/Button/Button";
import Input from "Components/atoms/Input/Input";

import medicinesDB from "assets/medicines.json";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;
const SelfSameWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;
const SelfSameTitle = styled(Title)`
  width: 100%;
  margin-bottom: 8rem;
  font-size: 2.5rem;
  text-align: center;
  padding: 0;
  color: ${({ theme }) => theme.warning};
`;
const ButtonLink = styled(Button)`
  height: 100%;
  padding: 1rem;
  line-height: 100%;
`;
const TitleAdd = styled(Title)`
  color: ${({ theme }) => theme.info};
`;
const InnerWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
const SearchList = styled.ul`
  width: 80%;
  max-height: 25rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
  padding: 1rem 0;

  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-size: 3px 100%, 100% 3px, 3px 100%, 100% 3px;
  background-repeat: no-repeat;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.lightmode.colors.secondary};
    border-radius: 1rem;
  }

  font-size: 1.8rem;
  text-align: center;
  overflow-y: scroll;
  cursor: pointer;

  background-image: linear-gradient(
      0deg,
      ${({ theme }) => theme.lightmode.colors.secondary},
      ${({ theme }) => theme.lightmode.colors.secondary} 25%,
      transparent 25%,
      transparent 75%,
      ${({ theme }) => theme.lightmode.colors.secondary} 75%
    ),
    // left
      linear-gradient(
        90deg,
        ${({ theme }) => theme.lightmode.colors.secondary},
        ${({ theme }) => theme.lightmode.colors.secondary} 25%,
        transparent 25%,
        transparent 75%,
        ${({ theme }) => theme.lightmode.colors.secondary} 75%
      ),
    // top
      linear-gradient(
        180deg,
        ${({ theme }) => theme.lightmode.colors.secondary},
        ${({ theme }) => theme.lightmode.colors.secondary} 25%,
        transparent 25%,
        transparent 75%,
        ${({ theme }) => theme.lightmode.colors.secondary} 75%
      ),
    // right
      linear-gradient(
        270deg,
        ${({ theme }) => theme.lightmode.colors.secondary},
        ${({ theme }) => theme.lightmode.colors.secondary} 25%,
        transparent 25%,
        transparent 75%,
        ${({ theme }) => theme.lightmode.colors.secondary} 75%
      );
  // bottom;;

  & > li {
    margin-bottom: 0.35rem;
  }
  & > li:nth-last-child(1) {
    margin: 0;
  }

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

const FormAdd = ({
  selfsameMed,
  theSameMedQueryOn,
  nameMed,
  amountMed,
  dateMed,
  medicines,
  addMed,
}) => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const today = new Date().toISOString().slice(0, 10);
  const [name, setName] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [inputIsActive, setInputStatus] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseSuggestedNames);

    return () => {
      document.removeEventListener("mousedown", handleCloseSuggestedNames);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseSuggestedNames = (e) => {
    e.target.id === "name" || e.target.id === "suggest" || e.target.id === "suggestItem"
      ? setInputStatus(true)
      : setInputStatus(false);
  };

  const handleActiveSuggest = (e) => {
    e.target.id === "name" ? setInputStatus(true) : setInputStatus(false);
  };

  const backToHome = () => {
    history.push("/Apteczka");
  };

  const onSubmit = (values) => {
    const newMed = {
      name: values.name,
      amount: values.amount,
      date: values.date,
      copy: false,
    };
    newMed.name = newMed.name.charAt(0).toUpperCase() + newMed.name.slice(1);

    // Check if entered medicine already is in medical kit
    const isDuplicate = medicines.filter((item) => item.name === newMed.name.trim());

    if (isDuplicate.length) theSameMedQueryOn(newMed.name, newMed.amount, newMed.date);
    else {
      backToHome();
      addMed(newMed);
    }
  };

  const addTheSameMed = () => {
    const theSameNames = [];
    medicines.forEach((med) => {
      if (
        med.name.replace(/[^a-zA-Z ]/g, "").trim() ===
        nameMed.replace(/[^a-zA-Z ]/g, "").trim()
      )
        theSameNames.push(med.name.replace(/[^a-zA-Z ]/g, "").trim());
    });
    const values = {
      name: `${nameMed.trim()} (${theSameNames.length + 1})`,
      amount: amountMed,
      date: dateMed,
      copy: true,
    };
    addMed(values);
    backToHome();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    suggestNames(e.target.value);
  };

  const collectSuggestedNames = (item) => {
    const suggested = medicinesDB
      .sort()
      .filter((medicine) => medicine.toLowerCase().includes(item.toLowerCase()));
    setSuggest(suggested);
  };

  const suggestNames = (typedName) => {
    typedName.length > 1 ? collectSuggestedNames(typedName) : setSuggest([]);
  };

  const handleChooseSuggested = (item) => {
    setValue("name", item);
    setName(item);
    collectSuggestedNames(item);
    setInputStatus(false);
  };

  const rederSuggestName = () => {
    if (suggest.length > 0 && inputIsActive) {
      return (
        <SearchList id="suggest">
          {suggest.map((item) => (
            <li id="suggestItem" key={item} onClick={() => handleChooseSuggested(item)}>
              {item}
            </li>
          ))}
        </SearchList>
      );
    } else return null;
  };

  return (
    <Wrapper>
      <TitleAdd mgt="2rem" mgb="2rem">
        Dodaj Lek
      </TitleAdd>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InnerWrapper>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            autoComplete="off"
            spellCheck="false"
            onChange={handleChangeName}
            onFocus={handleActiveSuggest}
            defaultValue={name}
            error={errors.name}
            ref={register({
              required: { value: true, message: "Podaj nazwę leku" },
              minLength: {
                value: 3,
                message: "Nazwa leku jest za krótka (min 3 litery)",
              },
              maxLength: {
                value: 30,
                message: "Nazwa leku jest zbyt długa (max 30 liter)",
              },
              pattern: {
                value: /^([A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]+(([-]?)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s])+([+]?)+([0-9\s]?)+([+]?)+([A-Za-z\s]{0,10})+([A-Za-z]{0,10})+%?)$/i,
                message: "Nieprawidłowa nazwa",
              },
            })}
            data-testid="name"
          />
          <Label htmlFor="name">Nazwa Leku</Label>
          {errors.name && <InputError>{errors.name.message}</InputError>}
        </InnerWrapper>
        {rederSuggestName()}
        <InnerWrapper>
          <Input
            id="amount"
            type="number"
            name="amount"
            placeholder=" "
            onFocus={handleActiveSuggest}
            error={errors.amount}
            ref={register({
              required: { value: true, message: "Podaj ilość leku" },
              maxLength: {
                value: 3,
                message: "Nie można wprowadzić takiej ilości (max 999)",
              },
              min: {
                value: 1,
                message: "Nie możesz wprowadzić takiej ilości (min 1)",
              },
              pattern: {
                value: /^[0-9\b]+$/,
                message: "Podaj poprawną ilość leku",
              },
            })}
            data-testid="amount"
          />
          <Label htmlFor="amount">Ilość</Label>
          {errors.amount && <InputError>{errors.amount.message}</InputError>}
        </InnerWrapper>
        <InnerWrapper>
          <Input
            id="date"
            type="date"
            name="date"
            onFocus={handleActiveSuggest}
            defaultValue={today}
            error={errors.date}
            ref={register({
              required: { value: true, message: "Podaj datę ważności" },
              min: {
                value: today,
                message: "Nie możesz wprowadzić starego leku",
              },
            })}
            data-testid="date"
          />
          <Label htmlFor="date">Data ważności</Label>
          {errors.date && <InputError>{errors.date.message}</InputError>}
        </InnerWrapper>
        <Button primary type="submit" mgt="3rem" data-testid="submit">
          Dodaj Lek
        </Button>
      </Form>
      {selfsameMed ? (
        <SelfSameWrap>
          <SelfSameTitle>Masz już lek {nameMed}, czy chcesz dodać kolejny?</SelfSameTitle>
          <div>
            <Button warning mgr="1.5rem" onClick={addTheSameMed}>
              Tak
            </Button>
            <Button warning mgl="1.5rem" onClick={backToHome}>
              Nie
            </Button>
          </div>
        </SelfSameWrap>
      ) : null}
      <ButtonLink secondary="true" mgt="5rem" as={Link} to="/Apteczka">
        Wróć
      </ButtonLink>
    </Wrapper>
  );
};

FormAdd.propTypes = {
  selfsameMed: PropTypes.bool.isRequired,
  theSameMedQueryOn: PropTypes.func.isRequired,
  nameMed: PropTypes.string.isRequired,
  amountMed: PropTypes.string.isRequired,
  dateMed: PropTypes.string.isRequired,
  medicines: PropTypes.arrayOf(PropTypes.object),
  addMed: PropTypes.func.isRequired,
};

FormAdd.defaultProps = {
  selfsameMed: false,
  theSameMedQueryOn: () => {},
  nameMed: "",
  amountMed: 0,
  dateMed: "",
  medicines: [],
  addMed: () => {},
};

const mapStateToProps = (state) => {
  const { medicines } = state.medicines;
  return { medicines };
};
const mapDispatchToProps = (dispatch) => ({
  addMed: (medicine) => dispatch(addMedicines(medicine)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
