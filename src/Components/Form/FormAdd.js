import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { addMedicine } from 'Actions';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
  width: 250px;
  height: 50px;
  margin-top: 20px;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
  color: #a55f62;
  border: 2px solid black;
  background-color: black;
  list-style: none;
  text-decoration: none;
  line-height: 45px;
  text-align: center;
`;

const FormAdd = ({ addMed }) => {
  const today = new Date().toISOString().slice(0, 10);
  const history = useHistory();

  const backToHome = () => {
    history.push('/ApteczkaProject');
  };
  return (
    <Wrapper>
      <Title>Dodaj Lek</Title>
      <Formik
        initialValues={{
          name: '',
          amount: '',
          date: today,
          show: true,
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
          addMed(values);
          backToHome();
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
                  // value={this.state.nameMedicine}
                  // onChange={this.handleInputChange}
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
                  // minAmount="1"
                  onChange={handleChange}
                  value={values.amount}
                  // value={this.state.amountMedicine}
                  // onChange={this.handleInputChange}
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
                  // minDate={today}
                  // value={this.state.dateMedicine}
                  // onChange={this.handleInputChange}
                />
                {errors.date && touched.date && errors.date}
              </MedicineLabel>
            </WrapperMedicine>
            <ButtonAdd type="submit" disabled={isSubmitting}>
              Submit
            </ButtonAdd>
          </Forms>
        )}
      </Formik>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMed: (medicine) => dispatch(addMedicine(medicine)),
});

export default connect(null, mapDispatchToProps)(FormAdd);
