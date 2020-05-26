import React from 'react';

import pillIcon from 'assets/icons/pill.svg';
import infoIcon from 'assets/icons/info.svg';
import editIcon from 'assets/icons/edit.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
};

export const Pill = () => <ButtonIcon icon={pillIcon} size="20rem" />;
export const Info = () => <ButtonIcon icon={infoIcon} size="20rem" />;
export const Edit = () => <ButtonIcon icon={editIcon} size="20rem" />;
