import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { addMedicine } from 'Actions';
import { useHistory, Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 70%;
  }
`;
const MedicineLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 800px) {
    .medicineLabel {
      margin: 0 80px;
    }
  }
`;
const Title = styled.h1`
  margin: 20px 0;
  color: white;
`;
const Input = styled.input`
  color: white;
  padding: 10px 0 10px 15px;
  font-size: 16px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  ::placeholder {
    font-size: 300;
    color: white;
  }
`;
const InputAmount = styled(Input)`
  width: 50px;
`;
const TitleMed = styled.h2`
  font-size: 20px;
  margin-left: 10px;
`;
const Forms = styled(Form)`
  width: 100%;
`;
const WrapperMedicine = styled.div`
  padding: 20px 5px;
  margin: 30px 0;
  background: rgba(245, 245, 245, 0.3);
`;
const ButtonAdd = styled.button`
  width: 100%;
  height: 50px;
  margin: 20px auto 0 auto;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
  color: #a55f62;
  border: 2px solid black;
  background-color: black;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
`;
const SelfSameWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const SelfSameTitle = styled.h1`
  text-align: center;
  margin: 35% 5% 10%;
  color: white;
`;
const SelfSameButton = styled.button`
  width: 100%;
  height: 10%;
  font-size: 22px;
  background-color: black;
  border: 2px solid #a55f62;
  color: whitesmoke;

  & + button {
    margin-top: 20px;
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
  const today = new Date().toISOString().slice(0, 10);
  const history = useHistory();
  const backToHome = () => {
    history.push('/ApteczkaProject');
  };
  const addTheSameMed = () => {
    const theSameNames = [];
    medicines.forEach((med) => {
      if (med.name.replace(/[^a-zA-Z ]/g, '').trim() === nameMed)
        theSameNames.push(med.name.replace(/[^a-zA-Z ]/g, '').trim());
    });
    const values = {
      name: `${nameMed} (${theSameNames.length + 1})`,
      amount: amountMed,
      date: dateMed,
      copy: true,
    };
    addMed(values);
    backToHome();
  };

  return (
    <Wrapper>
      <Title>Dodaj Lek</Title>
      <Formik
        initialValues={{
          name: '',
          amount: '',
          date: today,
          copy: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Wpisz nazwę leku!';
          } else if (/[^a-zA-Z]+/i.test(values.name)) {
            errors.name = 'Nazwa zawiera niedozwolone znaki';
          }
          if (!values.amount) {
            errors.amount = 'Podaj ilość leku!';
          } else if (values.amount < 0) {
            errors.amount = 'Podaj poprawną ilość';
          }
          if (!values.date) {
            errors.date = 'Podaj datę ważności!';
          } else if (values.date < today) {
            errors.date = 'Nie możesz wprowadzić starego leku';
          }
          return errors;
        }}
        onSubmit={(values) => {
          // eslint-disable-next-line no-param-reassign
          values.name = values.name.charAt(0).toUpperCase() + values.name.slice(1);
          const names = [];
          medicines.forEach((med) => names.push(med.name));
          const same = names.indexOf(values.name) !== -1;
          if (!same) {
            backToHome();
            addMed(values);
          } else theSameMedQueryOn(values.name, values.amount, values.date);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <WrapperMedicine>
              <MedicineLabel>
                <TitleMed>Nazwa</TitleMed>
                <Input
                  name="name"
                  type="text"
                  placeholder="Nazwa leku"
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </MedicineLabel>
            </WrapperMedicine>

            <WrapperMedicine>
              <MedicineLabel>
                <TitleMed>Ilość</TitleMed>
                <InputAmount
                  name="amount"
                  type="number"
                  placeholder="0"
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.amount}
                />
                {errors.amount && touched.amount && errors.amount}
              </MedicineLabel>
            </WrapperMedicine>

            <WrapperMedicine>
              <MedicineLabel>
                <TitleMed>Data ważności</TitleMed>
                <Input
                  name="date"
                  type="date"
                  onChange={handleChange}
                  value={values.date}
                />
                {errors.date && touched.date && errors.date}
              </MedicineLabel>
            </WrapperMedicine>
            <ButtonAdd type="submit" disabled={isSubmitting}>
              Dodaj lek
            </ButtonAdd>
          </Forms>
        )}
      </Formik>
      {selfsameMed ? (
        <SelfSameWrap>
          <SelfSameTitle>Masz już lek {nameMed}, czy chcesz dodać kolejny?</SelfSameTitle>
          <SelfSameButton onClick={addTheSameMed}>Tak</SelfSameButton>
          <SelfSameButton onClick={backToHome}>Nie</SelfSameButton>
        </SelfSameWrap>
      ) : null}
      <ButtonAdd as={Link} to="/ApteczkaProject">
        Wróć
      </ButtonAdd>
    </Wrapper>
  );
};

FormAdd.propTypes = {
  selfsameMed: Proptypes.bool.isRequired,
  theSameMedQueryOn: Proptypes.func.isRequired,
  nameMed: Proptypes.string.isRequired,
  amountMed: Proptypes.number.isRequired,
  dateMed: Proptypes.string.isRequired,
  medicines: Proptypes.array.isRequired,
  addMed: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { medicines } = state;
  return { medicines };
};
const mapDispatchToProps = (dispatch) => ({
  addMed: (medicine) => dispatch(addMedicine(medicine)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
