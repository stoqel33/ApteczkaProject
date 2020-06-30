import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from 'data/Actions/authActions';
import { clearProfile } from 'data/Actions/profileActions';

import Text from 'Components/atoms/Text/Text';

const Wrapper = styled.div`
  position: fixed;
  height: 90vh;
  width: 100vw;
  bottom: 0;

  display: flex;
  justify-content: center;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.lightmode.colors.background};
  transition: transform 0.3s ease-in-out;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  height: 70%;
  margin-top: 5rem;
`;
const Option = styled(Text)`
  color: ${({ theme }) => theme.info};
`;

const BurgerMenu = ({ open, logout, clearProfile }) => {
  const handleLogout = () => {
    logout();
    clearProfile();
  };
  return (
    <Wrapper open={open}>
      <InnerWrapper>
        <Option>Informacje o aplikacji</Option>
        <Option onClick={handleLogout}>Wyloguj</Option>
      </InnerWrapper>
    </Wrapper>
  );
};

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  clearProfile: () => dispatch(clearProfile()),
});

export default connect(null, mapDispatchToProps)(BurgerMenu);
