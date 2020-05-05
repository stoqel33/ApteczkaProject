import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { removeOneMedicine } from 'Actions';
import PropTypes from 'prop-types';
import Link from 'Styled/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  margin-bottom: 20px;
  background-color: rgba(245, 245, 245, 0.3);
  border-radius: 10%;

  &:last-child {
    margin-bottom: 30px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  margin-bottom: 7px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleName = styled(Title)`
  font-size: 25px;
`;

const Value = styled.span`
  margin-left: 8px;
  font-weight: 700;
`;
const BtnDrug = styled.button`
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const MedicineItem = ({ id, name, amount, date, takePill }) => {
  return (
    <Wrapper>
      <TitleName>
        Lek <Value>{name}</Value>
      </TitleName>
      <Title>
        Ilość <Value>{amount}</Value>
      </Title>
      <Title>
        Data ważności <Value>{date.slice(0, 10)}</Value>
      </Title>
      <Options>
        <Link to={`/ApteczkaProject/editMedicine/${id}`}>
          <span>edytuj</span>
        </Link>
        <BtnDrug
          onClick={() => {
            if (amount > 0) {
              takePill(id);
            }
          }}
        >
          Zażyj
        </BtnDrug>
      </Options>
    </Wrapper>
  );
};

MedicineItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  takePill: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  takePill: (id) => dispatch(removeOneMedicine(id)),
});

export default connect(null, mapDispatchToProps)(MedicineItem);
