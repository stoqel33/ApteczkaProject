import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'atoms/Input',
};

export const Normal = () => <Input placeholder="Nazwa" />;
export const Login = () => <Input placeholder="email" user />;
export const Password = () => <Input placeholder="Password" user type="password" />;
