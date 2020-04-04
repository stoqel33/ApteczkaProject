import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Link from 'Styled/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
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

const Item = ({ id, name, amount, date, remind, handle }) => {
  // Wyłapanie id leku i przekazanie który lek ma być edytowany
  const handled = (e) => handle(parseInt(e.target.id, 10));

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
      {remind ? (
        <Title>
          Przypomnienie
          <Value>TAK</Value>
        </Title>
      ) : (
        <Title>
          Przypomnienie
          <Value>NIE</Value>
        </Title>
      )}
      <Link to="/ApteczkaProject/editMedicine" onClick={handled}>
        <span id={id}>edytuj</span>
      </Link>
    </Wrapper>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  remind: PropTypes.bool.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Item;
