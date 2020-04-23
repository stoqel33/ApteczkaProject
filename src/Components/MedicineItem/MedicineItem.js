import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Link from 'Styled/Link';
import { connect } from 'react-redux';
import { removeMedicine } from 'Actions';

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

const MedicineItem = ({ id, name, amount, date, removeMed }) => {
  return (
    <Wrapper>
      <TitleName>
        Lek <Value>{name}</Value>
      </TitleName>
      <Title>
        Ilość <Value>{amount}</Value>
      </Title>
      <Title>
        Data ważności <Value>{date}</Value>
      </Title>
      <Link to={`/ApteczkaProject/editMedicine/${id}`}>
        <span>edytuj</span>
      </Link>
      <button onClick={() => removeMed(id)}>Usun</button>
    </Wrapper>
  );
};

MedicineItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  removeMed: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeMed: (id) => dispatch(removeMedicine(id)),
});

export default connect(null, mapDispatchToProps)(MedicineItem);
// export default Item;
