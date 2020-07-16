import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { addMedicines } from 'data/Actions/medicinesActions';
import { useHistory, Link } from 'react-router-dom';

import FormCell from 'Components/molecules/FormCell/FormCell';
import Title from 'Components/atoms/Title/Title';
import Button from 'Components/atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 70%;
  }
`;
const Forms = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SelfSameWrap = styled.div`
  position: absolute;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;
const SelfSameTitle = styled(Title)`
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  margin: 35% 5% 10%;
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
      <TitleAdd mgt="2rem" mgb="2rem">
        Dodaj Lek
      </TitleAdd>
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
            <FormCell
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              errors={errors.name && touched.name && errors.name}
            />
            <FormCell
              name="amount"
              type="number"
              onChange={handleChange}
              value={values.amount}
              errors={errors.amount && touched.amount && errors.amount}
            />
            <FormCell
              name="date"
              type="date"
              onChange={handleChange}
              value={values.date}
              errors={errors.date && touched.date && errors.date}
            />
            <Button mgt="3rem" type="submit" disabled={isSubmitting}>
              Dodaj lek
            </Button>
          </Forms>
        )}
      </Formik>
      {selfsameMed ? (
        <SelfSameWrap>
          <SelfSameTitle>Masz już lek {nameMed}, czy chcesz dodać kolejny?</SelfSameTitle>
          <Button mgr="1.5rem" onClick={addTheSameMed}>
            Tak
          </Button>
          <Button mgl="1.5rem" onClick={backToHome}>
            Nie
          </Button>
        </SelfSameWrap>
      ) : null}
      <ButtonLink mgt="5rem" as={Link} to="/ApteczkaProject">
        Wróć
      </ButtonLink>
    </Wrapper>
  );
};

FormAdd.propTypes = {
  selfsameMed: PropTypes.bool.isRequired,
  theSameMedQueryOn: PropTypes.func.isRequired,
  nameMed: PropTypes.string.isRequired,
  amountMed: PropTypes.number.isRequired,
  dateMed: PropTypes.string.isRequired,
  medicines: PropTypes.arrayOf(PropTypes.object),
  addMed: PropTypes.func.isRequired,
};

FormAdd.defaultProps = {
  medicines: [],
};

const mapStateToProps = (state) => {
  const { medicines } = state.medicines;
  return { medicines };
};
const mapDispatchToProps = (dispatch) => ({
  addMed: (medicine) => dispatch(addMedicines(medicine)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
