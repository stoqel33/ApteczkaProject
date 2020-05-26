import React from 'react';

import Label from './Label';

export default {
  component: Label,
  title: 'Label',
};

export const Name = () => <Label>Nazwa</Label>;
export const Amount = () => <Label>Ilość tabletek</Label>;
export const ExpiryDate = () => <Label>Data ważności</Label>;
