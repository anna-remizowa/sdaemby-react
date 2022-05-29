export function getDateFromISO(dateISO: string, withoutYear?: boolean): string {
  try {
    const dateConvert = new Date(dateISO);
    return `${dateConvert.getDate()} ${MONTHS[dateConvert.getMonth() + 1]} ${
      withoutYear ? '' : dateConvert.getFullYear()
    }`;
  } catch (e) {
    console.log(e);
  }

  return dateISO;
}

interface Month {
  [key: number]: string;
}

const MONTHS: Month = {
  1: 'Января',
  2: 'Февраля',
  3: 'Марта',
  4: 'Апреля',
  5: 'Мая',
  6: 'Июня',
  7: 'Июля',
  8: 'Августа',
  9: 'Сентября',
  10: 'Октября',
  11: 'Ноября',
  12: 'Декабря',
};
