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
    remindMedicine: false,
  };

  handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.id]: e.target.checked,
      });
    } else if (e.target.type === 'tel') {
      e.target.value = e.target.value.replace(/[^0-9]+/, '');
      if (e.target.value === '0') {
        e.target.value = '';
      } else {
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
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };

  handleClickSubmit = () => {
    const { nameMedicine, amountMedicine, dateMedicine, remindMedicine } = this.state;
    const nameMed = nameMedicine.trim();
    const medicineName = nameMed.charAt(0).toUpperCase() + nameMed.slice(1).trim();
    const newMedicine = this.props.addMedicine(
      medicineName,
      amountMedicine,
      dateMedicine,
      remindMedicine,
    );
    if (newMedicine) {
      this.setState({
        nameMedicine: '',
        amountMedicine: '',
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

        {this.state.nameMedicine.trim().length > 2 &&
        this.state.amountMedicine.length > 0 ? (
          <Link to="/ApteczkaProject/" onClick={this.handleClickSubmit}>
            <ButtonAdd>DODAJ</ButtonAdd>
          </Link>
        ) : (
          <Link to="/ApteczkaProject/AddMedicine">
            <ButtonAdd>DODAJ</ButtonAdd>
          </Link>
        )}
      </Wrapper>
    );
  }
}

export default Form;
