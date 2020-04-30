/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMedicines } from 'Actions';
import Link from 'Styled/Link';
import MedicineItem from 'Components/MedicineItem/MedicineItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: white;
`;

const Empty = styled.h1`
  margin: 50px 20px;
  padding: 100px 40px;
  background-color: rgba(245, 245, 245, 0.3);
  border-radius: 10%;
  color: black;
`;

const ButtonAddNew = styled.button`
  width: 100%;
  margin-bottom: 20px;
  font-size: 35px;
  color: white;
  background-color: transparent;
  border: none;
`;

class Medicine extends React.Component {
  componentDidMount() {
    const { fetchMed } = this.props;
    fetchMed();
  }

  componentDidUpdate(prevProps, prevState) {
    const { refresh } = this.props;
    const { fetchMed } = this.props;
    if (refresh !== prevProps.refresh) {
      fetchMed();
    }
  }

  render() {
    const { medicines, isLoading, response } = this.props;
    return (
      <>
        {response ? (
          isLoading ? (
            <h1>Wczytywanie</h1>
          ) : (
            <Wrapper>
              <Title>Apteczka</Title>
              {medicines.length > 0 ? (
                medicines.map(({ name, amount, expiryDate, _id }) => (
                  <MedicineItem
                    key={_id}
                    id={_id}
                    name={name}
                    amount={amount}
                    date={expiryDate}
                  />
                ))
              ) : (
                <Empty>Brak leków</Empty>
              )}
              <ButtonAddNew>
                <Link to="/ApteczkaProject/addMedicine">Dodaj nowy lek</Link>
              </ButtonAddNew>
            </Wrapper>
          )
        ) : (
          <h1>Sorry, database is down</h1>
        )}
      </>
    );
  }
}

Medicine.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      expiryDate: PropTypes.string.isRequired,
    }),
  ),
};

Medicine.defaultProps = {
  medicines: [],
};
const mapStateToProps = (state) => {
  const { medicines, isLoading, response, refresh } = state;
  return { medicines, isLoading, response, refresh };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMed: () => dispatch(fetchMedicines()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
