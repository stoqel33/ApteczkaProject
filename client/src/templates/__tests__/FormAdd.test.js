import React from 'react';
import { fireEvent, waitForDomChange } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'data/Store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/mainTheme';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import FormAdd from 'templates/FormAdd/FormAdd';

const renderForm = (props) => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FormAdd {...props} />
      </ThemeProvider>
    </Provider>,
  );

  const inputName = utils.getByTestId('name');
  const inputAmount = utils.getByTestId('amount');
  const inputDate = utils.getByTestId('date');
  const submitButton = utils.getByTestId('submit');

  return { ...utils, inputName, inputAmount, inputDate, submitButton };
};

describe('Form Add template', () => {
  it('Component renders', () => {
    const { getAllByText } = renderForm();
    getAllByText('Dodaj Lek');
  });

  it('Show list of medicines', () => {
    const { getByText, inputName } = renderForm();

    fireEvent.change(inputName, { target: { value: 'apap' } });
    expect(getByText('Apap Noc')).toBeInTheDocument();
  });

  it('Show error if medicine name is longer than 30 characters', async () => {
    const { getByText, inputName, submitButton } = renderForm();

    fireEvent.change(inputName, {
      target: { value: 'qwertyqwertyqwertyqwertyqwertyqwerty' },
    });
    fireEvent.click(submitButton);
    await waitForDomChange(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(getByText('Nazwa leku jest zbyt długa (max 30 liter)')).toBeInTheDocument();
    });
  });

  it('Show error if medicine name contain special character', async () => {
    const { getByText, inputName, submitButton } = renderForm();

    fireEvent.change(inputName, { target: { value: 'apap@' } });
    fireEvent.click(submitButton);
    await waitForDomChange(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(getByText('Nieprawidłowa nazwa')).toBeInTheDocument();
    });
  });

  it('Show error if medicine amount exceed 999', async () => {
    const { getByText, inputAmount, submitButton } = renderForm();

    fireEvent.change(inputAmount, { target: { value: 1000 } });
    fireEvent.click(submitButton);
    await waitForDomChange(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(getByText('Nie można wprowadzić takiej ilości (max 999)'));
    });
  });

  it('Show error if amount is less than 1', async () => {
    const { getByText, inputAmount, submitButton } = renderForm();

    fireEvent.change(inputAmount, { target: { value: 0 } });
    fireEvent.click(submitButton);
    await waitForDomChange(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(getByText('Nie możesz wprowadzić takiej ilości (min 1)'));
    });
  });

  it('Show error if expiry date is old', async () => {
    const { getByText, inputDate, submitButton } = renderForm();

    fireEvent.change(inputDate, { target: { value: '2020-01-01' } });
    fireEvent.click(submitButton);
    await waitForDomChange(() => {
      expect(onSubmit).toHaveBeenCalled();
      expect(getByText('Nie możesz wprowadzić starego leku')).toBeInTheDocument();
    });
  });
});
