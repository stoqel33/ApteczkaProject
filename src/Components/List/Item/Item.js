import React from 'react';
import styled from 'styled-components';

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

const TitleName = styled.span`
  font-size: 25px;
`;

const Title = styled.span`
  font-size: 18px;
  margin-bottom: 7px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Value = styled.span`
  margin-left: 8px;
  font-weight: 700;
`;

const Item = ({ name, amount, date, remind }) => (
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
  </Wrapper>
);

export default Item;
