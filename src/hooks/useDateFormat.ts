import moment from 'moment';

const useDateFormat = (date: string | undefined) => {
  return moment().format("DD/MM/YYYY HH:mm")
}

export default useDateFormat
