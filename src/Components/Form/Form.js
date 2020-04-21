import React from 'react';
import styled from 'styled-components/macro';
import Link from 'Styled/Link';
import Label from './Label/Label';

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
  width: 250px;
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
    amountMedicine: '',
    dateMedicine: new Date().toISOString().slice(0, 10),
  };

  // Walidacja inputów
  handleInputChange = (e) => {
    if (e.target.type === 'tel') {
      e.target.value = e.target.value.replace(/[^0-9]+/, '');
      if (e.target.value === '0') e.target.value = '0';
      else {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
    } else if (e.target.type === 'text') {
      e.target.value = e.target.value.replace(/[^a-zA-Z]+/, '');
      this.setState({
        [e.target.id]: e.target.value,
      });
    } else {
      const nowDate = new Date(this.state.dateMedicine);
      const currentDate = new Date(e.target.value);
      if (currentDate >= nowDate) {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
    }
  };

  // Obsługa dodania leku
  handleClickSubmit = () => {
    const { nameMedicine, amountMedicine, dateMedicine } = this.state;
    const nameMed = nameMedicine.charAt(0).toUpperCase() + nameMedicine.slice(1);
    this.props.addMedicine(nameMed, amountMedicine, dateMedicine);
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
              placeholder="Nazwa"
              autoComplete="off"
              value={this.state.nameMedicine}
              onChange={this.handleInputChange}
            >
              Nazwa leku
            </Label>
          </WrapperMedicine>

          <WrapperMedicine>
            <Label
              name="amountMedicine"
              type="tel"
              placeholder="0"
              autoComplete="off"
              minAmount="1"
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
              minDate={this.props.today}
              value={this.state.dateMedicine}
              onChange={this.handleInputChange}
            >
              Data ważności
            </Label>
          </WrapperMedicine>
        </FormAdd>

        {this.state.nameMedicine.length > 2 && this.state.amountMedicine.length > 0 ? (
          <Link to="/ApteczkaProject/" onClick={this.handleClickSubmit}>
            <ButtonAdd>DODAJ</ButtonAdd>
          </Link>
        ) : (
          <Link to="/ApteczkaProject/AddMedicine/">
            <ButtonAdd>DODAJ</ButtonAdd>
          </Link>
        )}
      </Wrapper>
    );
  }
}

export default Form;
