import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile, getProfile } from "data/Actions/profileActions";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { device } from "Theme/mainTheme";

import Button from "Components/atoms/Button/Button";
import Text from "Components/atoms/Text/Text";
import Input from "Components/atoms/Input/Input";
import Label from "Components/atoms/Label/Label";
import InputError from "Components/atoms/InputError/InputError";

import imgXsMedicines from "assets/image/xsmall-medicines.png";

const showingMedicines = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    width: 70%;
  }
`;
const Forms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.lightmode.colors.background};

  &:focus-within {
    margin-bottom: 1.2rem;
  }
`;
const TitleInfo = styled(Text)`
  color: ${({ theme }) => theme.info};
`;
const Image = styled.div`
  background-image: url(${imgXsMedicines});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;

  width: 17rem;
  height: 17rem;

  animation: ${showingMedicines} 0.8s ease-in;
`;

const FormCreateProfile = ({ createUser, getUser }) => {
  const history = useHistory();
  useEffect(() => {
    getUser(history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { errors, register, handleSubmit } = useForm();
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (data) => {
    createUser(data, history);
  };

  return (
    <Wrapper>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <TitleInfo mgt="4rem" mgb="5rem">
          Stwórz profil
        </TitleInfo>
        <InputWrapper>
          <Input
            user
            autoComplete="off"
            id="nickname"
            name="nickname"
            type="text"
            placeholder=" "
            error={errors.nickname}
            ref={register({
              required: { value: true, message: "Nazwa jest wymagana" },
              minLength: { value: 3, message: "Nazwa musi zawierać minimum 3 znaki" },
              maxLength: { value: 30, message: "Nazwa jest za długa (max 30 znaków)" },
            })}
          />
          <Label htmlFor="nickname">Nazwa użytkownika</Label>
          {errors.nickname && <InputError>{errors.nickname.message}</InputError>}
        </InputWrapper>
        <InputWrapper>
          <Input user id="date" name="date" type="date" defaultValue={today} />
          <Label htmlFor="date">Data urodzenia*</Label>
        </InputWrapper>
        <Text fs="1.2">*Data urodzenia nie jest wymagana</Text>
        <Image />
        <Button mgt="2rem" type="submit">
          Stwórz konto
        </Button>
      </Forms>
    </Wrapper>
  );
};

FormCreateProfile.propTypes = {
  createUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (userData, history) => dispatch(createProfile(userData, history)),
  getUser: (history) => dispatch(getProfile(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateProfile);
