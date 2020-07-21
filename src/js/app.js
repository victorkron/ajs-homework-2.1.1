// TODO: write your code here

export default function verify(strNum) {
  let value = Number.parseInt(strNum, 10);

  if (Number.isNaN(value)) {
    value = undefined;
    try { // try используется для того, чтобы код не остановился при выбросе ошибки
      throw new Error('Введено некорректное значение');
    } catch (e) {
      console.error(e);
    }
  } else if (value <= 0) {
    value = undefined;
    try { // try используется для того, чтобы код не остановился при выбросе ошибки
      throw new Error('Отрицательное или нулевое значение');
    } catch (e) {
      console.error(e);
    }
  }

  return value;
}
