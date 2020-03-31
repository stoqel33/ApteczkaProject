import React from 'react';
import Link from 'Styled/Link';
import Label from './Label/Label';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin: 20px 0;
  color: white;
`;

const FormAdd = styled.form`
  width: 100%;
`;

const WrapperMedicine = styled.div`
  padding: 20px 5px;
  margin: 30px 0;
  background: rgba(245, 245, 245, 0.3);
`;

const ButtonAdd = styled.button`
  width: 60%;
  height: 50px;
  margin-top: 20px;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
  color: #a55f62;
  border: 2px solid black;
  background-color: black;
  list-style: none;
  text-decoration: none;
  line-height: 45px;
  text-align: center;
`;

class Form extends React.Component {
  state = {
    nameMedicine: '',
    amountMedicine: '0',
    dateMedicine: new Date().toISOString().slice(0, 10),
    remindMedicine: false,
  };

  handleInputChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.id]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };

  handleClickSubmit = () => {
    const { nameMedicine, amountMedicine, dateMedicine, remindMedicine } = this.state;
    const newMedicine = this.props.addMedicine(
      nameMedicine.trim(),
      amountMedicine,
      dateMedicine,
      remindMedicine,
    );
    if (newMedicine) {
      this.setState({
        nameMedicine: '',
        amountMedicine: 0,
        dateMedicine: new Date().toISOString().slice(0, 10),
        remindMedicine: false,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Dodaj Lek</Title>
        <FormAdd>
          <WrapperMedicine>
            <Label
              name="nameMedicine"
              type="text"
              autoComplete="off"
              value={this.state.nameMedicine}
              onChange={this.handleInputChange}
              placeholder="Nazwa"
            >
              Nazwa leku
            </Label>
          </WrapperMedicine>

          <WrapperMedicine>
            <Label
              name="amountMedicine"
              type="number"
              placeholder="0"
              value={this.state.amountMedicine}
              onChange={this.handleInputChange}
            >
              Ilość Tabletek
            </Label>
          </WrapperMedicine>

          <WrapperMedicine>
            <Label
              name="dateMedicine"
              type="date"
              value={this.state.dateMedicine}
              onChange={this.handleInputChange}
            >
              Data ważności
            </Label>
          </WrapperMedicine>

          <WrapperMedicine>
            <Label
              name="remindMedicine"
              type="checkbox"
              checked={this.state.remindMedicine}
              onChange={this.handleInputChange}
            >
              Przypomnienia
            </Label>
          </WrapperMedicine>
        </FormAdd>

        <ButtonAdd>
          <Link to="/ApteczkaProject/" onClick={this.handleClickSubmit}>
            DODAJ
          </Link>
        </ButtonAdd>
      </Wrapper>
    );
  }
}

export default Form;
