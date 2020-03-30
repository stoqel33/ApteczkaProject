import React from 'react'

const Item = ({ name, amount, date, remind }) => (
  <>
    <h1>{name}</h1>
    <h2>{amount}</h2>
    <h3>{date}</h3>
    {remind ? <h4>Tak</h4> : <h4>Nie</h4>}
  </>
);

export default Item;