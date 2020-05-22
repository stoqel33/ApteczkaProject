/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeMedicine, removeMedicine } from 'data/Actions';
import Bin from 'Components/Icons/Bin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 1000px) {
    position: relative;
    margin: 0 auto;
    width: 70%;
  }
`;
const Title = styled.h1`
  margin: 20px 0;
  color: white;
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
  width: 100%;
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
  cursor: pointer;
`;
const ButtonRemove = styled.button`
  margin-bottom: 50px;
  margin-top: 20px;
  background-color: transparent;
  border: none;
`;
const RemoveWrap = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const RemoveTitle = styled.h1`
  margin: 30% 20px;
  color: white;

  @media screen and (min-width: 768px) {
    margin: 15% 0;
  }
`;
const RemoveButton = styled.button`
  margin: 0 20px;
  width: 35%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #5f0745;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
const InputCopy = styled(Input)`
  padding: 0;
  font-size: 18px;
  text-align: end;
  border: none;
`;

const FormEdit = ({
  medicine,
  medicines,
  changeMed,
  removeMed,
  deleteQuery,
  handleEnableDelete,
  handleDisableDelete,
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const history = useHistory();
  const backToHome = () => {
    history.push('/ApteczkaProject');
  };
  const handleRemove = () => {
    removeMed(medicine[0]._id);
    backToHome();
  };
  return (
    <Wrapper>
      <Title>Edytuj Lek</Title>
      <Formik
        initialValues={{
          id: medicine[0]._id,
          name: medicine[0].name,
          amount: medicine[0].amount,
          date: medicine[0].expiryDate.slice(0, 10),
        }}
        validate={(values) => {
          const errors = {};
          if (!medicine[0].copy) {
            medicines.forEach((item) => {
              if (
                item._id !== values.id &&
                item.name === values.name.charAt(0).toUpperCase() + values.name.slice(1)
              ) {
                errors.name = 'Masz już taki lek';
              }
            });
            if (!values.name) {
              errors.name = 'Wpisz nazwę leku';
            } else if (/[^a-zA-Z]+/i.test(values.name)) {
              errors.name = 'Nazwa zawiera niedozwolone znaki';
            }
          }
          if (!values.amount) {
            errors.amount = 'Podaj ilość leku';
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
          values.name = values.name.charAt(0).toUpperCase() + values.name.slice(1);
          changeMed(values, medicine[0]._id);
          backToHome();
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Forms onSubmit={handleSubmit}>
            <WrapperMedicine>
              <MedicineLabel>
                <TitleMed>Nazwa</TitleMed>
                {medicine[0].copy ? (
                  <InputCopy
                    name="name"
                    type="text"
                    autoComplete="off"
                    readOnly
                    value={values.name}
                  />
                ) : (
                  <Input
                    name="name"
                    type="text"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.name}
                  />
                )}
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
                {values.date < today ? <span>Lek jest przeterminowany!</span> : null}
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
              Zapisz i wyjdz
            </ButtonAdd>
          </Forms>
        )}
      </Formik>
      <ButtonAdd onClick={backToHome}>Wróć</ButtonAdd>
      {deleteQuery ? (
        <RemoveWrap>
          <RemoveTitle>Usunąć lek {medicine[0].name}?</RemoveTitle>
          <RemoveButton onClick={handleRemove}>TAK</RemoveButton>
          <RemoveButton onClick={handleDisableDelete}>NIE</RemoveButton>
        </RemoveWrap>
      ) : null}
      <ButtonRemove onClick={handleEnableDelete}>
        <Bin />
      </ButtonRemove>
    </Wrapper>
  );
};

FormEdit.propTypes = {
  medicine: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
      copy: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  medicines: PropTypes.array.isRequired,
  changeMed: PropTypes.func.isRequired,
  removeMed: PropTypes.func.isRequired,
  deleteQuery: PropTypes.bool.isRequired,
  handleEnableDelete: PropTypes.func.isRequired,
  handleDisableDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeMed: (medicine, id) => dispatch(changeMedicine(medicine, id)),
  removeMed: (id) => dispatch(removeMedicine(id)),
});

export default connect(null, mapDispatchToProps)(FormEdit);
