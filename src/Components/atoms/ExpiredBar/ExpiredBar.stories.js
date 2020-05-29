import React from 'react';

import ExpiredBar from './ExpiredBar';

export default {
  component: ExpiredBar,
  title: 'atoms/ExpiredBat',
};

export const Expired = () => <ExpiredBar>Lek jest przeterminowany</ExpiredBar>;
export const OneWeek = () => (
  <ExpiredBar notExpiredYet>Data ważności dobiega końca</ExpiredBar>
);
