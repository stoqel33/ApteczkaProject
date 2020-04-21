import React from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
// import AppContext from 'context';
import List from 'Components/List/List';
import Link from 'Styled/Link';
// import Search from '../../Components/Search/Search';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: white;
`;

const Empty = styled.h1`
  margin: 50px 20px;
  padding: 100px 40px;
  background-color: rgba(245, 245, 245, 0.3);
  border-radius: 10%;
  color: black;
`;

const ButtonAddNew = styled.button`
  width: 100%;
  margin-bottom: 20px;
  font-size: 35px;
  color: white;
  background-color: transparent;
  border: none;
`;

class Medicine extends React.Component {
  state = {
    response: true,
    id: '',
    today: new Date().toISOString().slice(0, 10),
    medicines: [],
  };

  componentDidMount() {
    console.log('mout');
    axios
      .get('http://localhost:3000/ApteczkaProject')
      .then((resp) => {
        console.log('przed if');

        if (resp.data.length > 0) {
          console.log('w if');

          this.setState({
            medicines: resp.data.map((medicine) => ({
              id: medicine._id,
              name: medicine.name,
              amount: medicine.amount,
              date: medicine.expiryDate.slice(0, 10),
              show: true,
            })),
          });
        }
      })
      .catch((err) => {
        console.log('Cannot get response database ' + err);
        this.setState({
          response: false,
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    if (nextState.response === true) return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('update');

    console.log(prevState.medicines.length);
    console.log(this.state.medicines.length);

    if (prevState.medicines.length !== this.state.medicines.length) {
      console.log('w update po if');

      axios.get('http://localhost:3000/ApteczkaProject').then((resp) => {
        this.setState({
          medicines: resp.data.map((medicine) => ({
            id: medicine._id,
            name: medicine.name,
            amount: medicine.amount,
            date: medicine.expiryDate.slice(0, 10),
            show: true,
          })),
        });
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Apteczka</Title>
        {this.state.medicines.length > 0 ? (
          <List medicines={this.state.medicines} />
        ) : (
          <Empty>Brak leków</Empty>
        )}
        <ButtonAddNew>
          <Link to="/ApteczkaProject/addMedicine">Dodaj nowy lek</Link>
        </ButtonAddNew>
      </Wrapper>
    );
  }
}
export default Medicine;
