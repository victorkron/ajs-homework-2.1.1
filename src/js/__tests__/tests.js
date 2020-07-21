import verify from '../app';

describe('Verify Tests: ', () => {
  test.each([
    ['input is valid', '357', 357],
    ['zero', '0', undefined],
    ['negative value', '-500700', undefined],
    ['input isn`t valid', 'hello', undefined],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const res = verify(inputData);

      expect(res).toBe(expectation);
    },
  );
});
