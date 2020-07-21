import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from 'Components/atoms/Text/Text';
import Button from 'Components/atoms/Button/Button';

import xsmallNotFound from 'assets/image/xsmall-notFound.png';

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.errorPage};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.div`
  height: 70%;
  width: 100%;
  background-image: url(${xsmallNotFound});
  background-repeat: no-repeat;
  background-position: center center;
`;
const ButtonBack = styled(Button)`
  width: 16rem;
  margin-top: 5rem;
  background-color: hsl(202, 48%, 60%);
  color: white;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Image />
      <Text fs="3">Page Not Found</Text>
      <Link to="/Apteczka">
        <ButtonBack>Strona główna</ButtonBack>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
