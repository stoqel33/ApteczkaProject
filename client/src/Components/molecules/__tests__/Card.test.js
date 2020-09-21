describe('Card molecule', () => {
  it('Cannot take medicine if is less than one', () => {
    const amount = 0;
    const func = () => {
      if (amount > 0) return true;
      else return false;
    };

    expect(func()).toBeFalsy();
  });

  it('Medicine is expired when present date has passed the expiration date', () => {
    const today = '2020-01-02';
    const expiryDate = '2020-01-01';
    const expired = today > expiryDate;

    expect(expired).toBeTruthy();
  });
});
