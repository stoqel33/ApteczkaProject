/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Formik, Form } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeMedicine, removeMedicine } from 'data/Actions/medicinesActions';
import { device } from 'Theme/mainTheme';

import FormCell from 'Components/molecules/FormCell/FormCell';
import Button from 'Components/atoms/Button/Button';
import Title from 'Components/atoms/Title/Title';
import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';

import binIcon from 'assets/icons/bin.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;
const Forms = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RemoveWrap = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.85);
`;
const RemoveTitle = styled(Title)`
  margin: 18rem 2rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.warning};
`;
const ButtonLink = styled(Button)`
  height: 100%;
  padding: 1rem;
  line-height: 100%;
`;
const InnerWrapButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 7rem;

  @media screen and ${device.laptop} {
    width: 40rem;
  }
`;
const TitleAdd = styled(Title)`
  color: ${({ theme }) => theme.info};
`;

const FormEdit = ({
  medicine,
  medicines,
  changeMed,
  removeMed,
  deleteQuery,
  handleToggleQuery,
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const history = useHistory();
  const backToHome = () => {
    history.push('/Apteczka');
  };
  const handleRemove = () => {
    removeMed(medicine[0]._id);
    backToHome();
  };
  return (
    <Wrapper>
      <TitleAdd mgt="2rem" mgb="2rem">
        Edytuj Lek
      </TitleAdd>
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
                item.name ===
                  values.name.charAt(0).toUpperCase() + values.name.slice(1).trim()
              ) {
                errors.name = 'Masz już taki lek';
              }
            });
            if (!values.name) {
              errors.name = 'Wpisz nazwę leku';
            } else if (
              !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]+(([-]?)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s])+([+]?)+([0-9\s]?)+([+]?)+([A-Za-z\s]{0,10})+([A-Za-z]{0,10})$/i.test(
                values.name,
              )
            ) {
              errors.name = 'Nazwa zawiera niedozwolone znaki';
            }
          }
          if (values.name.length > 30) {
            errors.name = 'Zbyt długa nazwa (max 30)';
          }
          if (!values.amount) {
            errors.amount = 'Podaj ilość leku';
          } else if (values.amount < 0) {
            errors.amount = 'Podaj poprawną ilość';
          } else if (values.amount > 999) {
            errors.amount = 'Nie można wprowadzić takiej ilości leku';
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
            {medicine[0].copy ? (
              <FormCell
                name="name"
                type="text"
                autoComplete="off"
                readOnly
                value={values.name}
                copy
              />
            ) : (
              <FormCell
                name="name"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                value={values.name}
                errors={errors.name && touched.name && errors.name}
              />
            )}
            <FormCell
              name="amount"
              type="number"
              placeholder="0"
              autoComplete="off"
              onChange={handleChange}
              value={values.amount}
              errors={errors.amount && touched.amount && errors.amount}
            />
            <FormCell
              name="date"
              type="date"
              onChange={handleChange}
              value={values.date}
              errors={errors.date && touched.date && errors.date && values.date < today}
              expired={values.date < today}
            />
            <Button data-testid="button" mgt="3rem" type="submit" disabled={isSubmitting}>
              Zapisz i wyjdz
            </Button>
          </Forms>
        )}
      </Formik>
      <InnerWrapButtons>
        <ButtonIcon onClick={handleToggleQuery} icon={binIcon} size="3rem" />
        <ButtonLink as={Link} to="/Apteczka">
          Wróć
        </ButtonLink>
      </InnerWrapButtons>
      {deleteQuery ? (
        <RemoveWrap>
          <RemoveTitle>Usunąć lek {medicine[0].name}?</RemoveTitle>
          <Button mgr="1.5rem" onClick={handleRemove}>
            TAK
          </Button>
          <Button mgl="1.5rem" onClick={handleToggleQuery}>
            NIE
          </Button>
        </RemoveWrap>
      ) : null}
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
  medicines: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeMed: PropTypes.func.isRequired,
  removeMed: PropTypes.func.isRequired,
  deleteQuery: PropTypes.bool.isRequired,
  handleToggleQuery: PropTypes.func.isRequired,
};

FormEdit.defaultProps = {
  medicine: [{}],
  medicines: [],
  changeMed: () => {},
  removeMed: () => {},
  deleteQuery: false,
  handleToggleQuery: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  changeMed: (medicine, id) => dispatch(changeMedicine(medicine, id)),
  removeMed: (id) => dispatch(removeMedicine(id)),
});

export default connect(null, mapDispatchToProps)(FormEdit);
