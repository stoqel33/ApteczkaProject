import React from 'react';
import styles from './Form.module.scss';
import Label from './Label/Label';

class Form extends React.Component {
  state = {
    nameMedicine: '',
    amountMedicine: 0,
    dateMedicine: new Date().toISOString().slice(0, 10),
    remindMedicine: false,
  }

  handleInputChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.id]: e.target.checked,
      })
    } else {
      this.setState(({
        [e.target.id]: e.target.value,
      }))
    }
  }

  handleClickSubmit = () => {
    const { nameMedicine, amountMedicine, dateMedicine, remindMedicine } = this.state;
    const newMedicine = this.props.addMedicine(nameMedicine.trim(), amountMedicine, dateMedicine, remindMedicine);
    if (newMedicine) {
      this.setState({
        nameMedicine: '',
        amountMedicine: 0,
        dateMedicine: new Date().toISOString().slice(0, 10),
        remindMedicine: false,
      })
    }
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Dodaj Lek</h1>
        <form className={styles.form}>
          <div className={styles.medicineWrapper}>
            <Label
              name="nameMedicine"
              type="text"
              autoComplete="off"
              value={this.state.nameMedicine}
              onChange={this.handleInputChange}
              placeholder="Name"
            >Nazwa leku</Label>
          </div>

          <div className={styles.medicineWrapper}>
            <Label
              name="amountMedicine"
              type="number"
              placeholder="0"
              value={this.state.amountMedicine}
              onChange={this.handleInputChange}
            >Ilość Tabletek</Label>
          </div>

          <div className={styles.medicineWrapper}>
            <Label
              name="dateMedicine"
              type="date"
              value={this.state.dateMedicine}
              onChange={this.handleInputChange}
            >Data ważności</Label>
          </div>

          <div className={styles.medicineWrapper}>
            <Label
              name="remindMedicine"
              type="checkbox"
              checked={this.state.remindMedicine}
              onChange={this.handleInputChange}
            >Przypomnienia</Label>
          </div>

        </form>

        <button
          onClick={this.handleClickSubmit}
          className={styles.btnAdd}>
          DODAJ
        </button>
      </div >
    )
  }
}

export default Form;