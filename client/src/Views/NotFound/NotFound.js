import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "Components/atoms/Text/Text";
import Button from "Components/atoms/Button/Button";

import xsmallNotFound from "assets/image/xsmall-notFound.png";

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

const NotFound = () => {
  return (
    <Wrapper>
      <Image />
      <Text fs="3">Page Not Found</Text>
      <Link to="/Apteczka">
        <Button secondary big mgt="6rem">
          Strona główna
        </Button>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
