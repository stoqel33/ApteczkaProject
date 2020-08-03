import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: 'molecules/Card',
};

export const MedicineGood = () => <Card name="Apap" amount={18} />;
export const MedicineBad = () => <Card name="Apap" amount={18} expired />;
