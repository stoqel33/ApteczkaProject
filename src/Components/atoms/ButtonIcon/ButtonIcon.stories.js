import React from 'react';

import pillIcon from 'assets/icons/pill.svg';
import infoIcon from 'assets/icons/info.svg';
import editIcon from 'assets/icons/edit.svg';
import burgerIcon from 'assets/icons/burger-menu.svg';
import searchIcon from 'assets/icons/search.svg';
import binIcon from 'assets/icons/bin.svg';

import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'atoms/ButtonIcon',
};

export const Pill = () => <ButtonIcon icon={pillIcon} size="20rem" />;
export const Info = () => <ButtonIcon icon={infoIcon} size="20rem" />;
export const Edit = () => <ButtonIcon icon={editIcon} size="20rem" />;
export const Burger = () => <ButtonIcon icon={burgerIcon} size="20rem" />;
export const Search = () => <ButtonIcon icon={searchIcon} size="20rem" />;
export const Bin = () => <ButtonIcon icon={binIcon} size="20rem" />;
