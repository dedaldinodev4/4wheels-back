import moment from 'moment'

//* Get CurrentDay *//
export const dateCurrentDay = (): Date => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)
}


//*  Formatter date *//
export const formatterDate = (date: Date | string): string => {
  const result = moment(date).format('YYYY-MM-DD');
  return result;
} 
