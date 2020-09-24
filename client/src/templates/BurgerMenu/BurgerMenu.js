import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppContext from 'context';
import { device } from 'Theme/mainTheme';

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
  z-index: 1;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: 80%;
  margin-top: 3rem;
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
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 135%;

  @media screen and ${device.tablet} {
    line-height: 180%;
  }

  @media screen and ${device.laptop} {
    line-height: 200%;
  }
`;

const BurgerMenu = ({ height, open, logout, clear }) => {
  const handleLogout = () => {
    logout();
    clear();
  };

  const List = ({ handleLicences }) => (
    <InnerWrapper>
      <Option onClick={handleLicences}>Źródła</Option>
      <Option onClick={handleLogout}>Wyloguj</Option>
    </InnerWrapper>
  );

  const References = ({ handleLicences }) => (
    <InnerWrapper style={{ justifyContent: 'space-between' }}>
      <HrefWrapper>
        <Text>Ikony</Text>
        <ContentWrapper>
          Icons made by{' '}
          <Href
            href="https://www.flaticon.com/authors/those-icons"
            target="_blank"
            title="Those Icons"
          >
            Those Icons,
          </Href>{' '}
          <Href
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            title="Freepik"
          >
            Freepik,
          </Href>{' '}
          <Href
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            title="Pixel perfect"
          >
            Pixel perfect,
          </Href>{' '}
          <Href
            href="https://www.flaticon.com/authors/kiranshastry"
            target="_blank"
            title="Kiranshastry"
          >
            Kiranshastry,
          </Href>{' '}
          <Href
            href="https://www.flaticon.com/authors/prettycons/"
            target="_blank"
            title="prettycons"
          >
            prettycons
          </Href>{' '}
          from{' '}
          <Href href="https://www.flaticon.com/" target="_blank" title="Flaticon">
            www.flaticon.com
          </Href>
        </ContentWrapper>
        <Text mgt="2rem">Obrazki</Text>
        <ContentWrapper>
          <Href href="https://www.freepik.com/free-photos-vectors/hand" target="_blank">
            Hand vector created by studiogstock - www.freepik.com,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/people" target="_blank">
            People vector created by gstudioimagen - www.freepik.com,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/design" target="_blank">
            Design vector created by cornecoba - www.freepik.com,
          </Href>{' '}
          <Href href="https://www.freepik.com/free-photos-vectors/design" target="_blank">
            Design vector created by photoroyalty - www.freepik.com
          </Href>
        </ContentWrapper>
      </HrefWrapper>
      <Button style={{ alignSelf: 'center' }} onClick={handleLicences}>
        Wróć
      </Button>
    </InnerWrapper>
  );

  return (
    <AppContext.Consumer>
      {(context) => (
        <Wrapper open={open} height={height}>
          {context.licencesState ? null : List(context)}
          {context.licencesState && References(context)}
        </Wrapper>
      )}
    </AppContext.Consumer>
  );
};

BurgerMenu.propTypes = {
  height: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  context: PropTypes.shape({
    handleLicences: PropTypes.func.isRequired,
    licencesState: PropTypes.bool.isRequired,
  }),
};

BurgerMenu.defaultProps = {
  height: 0,
  open: false,
  logout: () => {},
  clear: () => {},
  context: {
    handleLicences: () => {},
    licencesState: false,
  },
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  clear: () => dispatch(clearProfile()),
});

export default connect(null, mapDispatchToProps)(BurgerMenu);
