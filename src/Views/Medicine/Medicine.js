import React from 'react';
import styled from 'styled-components/macro';
import AppContext from 'context';
import List from 'Components/List/List';
import Link from 'Styled/Link';
import Search from '../../Components/Search/Search';

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

const Medicine = () => (
  <AppContext.Consumer>
    {(context) => (
      <Wrapper>
        <Title>Apteczka</Title>
        {context.medicines.length > 0 ? (
          <>
            {/* <Search
              medicines={context.medicines}
              showSearchMedicine={context.showSearchMedicine}
            /> */}
            <List medicines={context.medicines} handle={context.handle} />
          </>
        ) : (
          <Empty>Brak leków</Empty>
        )}
        <ButtonAddNew>
          <Link to="/ApteczkaProject/addMedicine">Dodaj nowy lek</Link>
        </ButtonAddNew>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default Medicine;
