import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding-top: 30%;
  text-align: center;
  color: white;
`;

const Error = () => {
  return (
    <>
      <Title>Sorry, databse is down.</Title>
    </>
  );
};

export default Error;
