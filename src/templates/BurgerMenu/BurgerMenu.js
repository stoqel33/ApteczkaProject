import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { device } from 'Theme/mainTheme';
import { logoutUser } from 'data/Actions/authActions';
import { clearProfile } from 'data/Actions/profileActions';

import Text from 'Components/atoms/Text/Text';
import Button from 'Components/atoms/Button/Button';

const Wrapper = styled.div`
  position: fixed;
  top: ${({ height }) => (height ? `${height}px` : '0px')};
  width: 100vw;
  height: 100%;
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
  cursor: pointer;
`;
const Href = styled.a`
  color: ${({ theme }) => theme.info};
`;
const HrefWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 0.5;
`;
const IconWrapper = styled.div``;
const ImageWrapper = styled.div``;

const BurgerMenu = ({ height, open, logout, clear, licencesToggle, licences }) => {
  const handleLogout = () => {
    logout();
    clear();
  };

  const List = (
    <InnerWrapper>
      <Option onClick={licencesToggle}>Źródła</Option>
      <Option onClick={handleLogout}>Wyloguj</Option>
    </InnerWrapper>
  );

  const References = (
    <InnerWrapper style={{ justifyContent: 'space-between' }}>
      <HrefWrapper>
        <Text>Ikony</Text>
        <IconWrapper>
          Icons made by{' '}
          <Href href="https://www.flaticon.com/authors/those-icons" title="Those Icons">
            Those Icons,
          </Href>{' '}
          <Href href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik,
          </Href>{' '}
          <Href
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect,
          </Href>{' '}
          <Href href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">
            Kiranshastry,
          </Href>{' '}
          <Href href="https://www.flaticon.com/authors/prettycons/" title="prettycons">
            prettycons
          </Href>{' '}
          from{' '}
          <Href href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Href>
        </IconWrapper>
        <Text mgt="2rem">Obrazki</Text>
        <ImageWrapper>
          <Href href="https://www.freepik.com/free-photos-vectors/hand">
            Hand vector created by studiogstock,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/people">
            People vector created by gstudioimagen,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/design">
            Design vector created by cornecoba,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/design">
            Design vector created by photoroyalty - www.freepik.com
          </Href>
        </ImageWrapper>
      </HrefWrapper>
      <Button style={{ alignSelf: 'center' }} onClick={licencesToggle}>
        Wróć
      </Button>
    </InnerWrapper>
  );

  return (
    <Wrapper open={open} height={height}>
      {licences ? null : List}
      {licences && References}
    </Wrapper>
  );
};

BurgerMenu.propTypes = {
  height: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  licencesToggle: PropTypes.func.isRequired,
  licences: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  clear: () => dispatch(clearProfile()),
});

export default connect(null, mapDispatchToProps)(BurgerMenu);
