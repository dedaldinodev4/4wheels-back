
//* Formatter number to currenty *//
export const formatterCurrency = (value: number, style?: boolean): string => {
    let formatter;

    if (style) {
      formatter = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA'
      }); 
    } else {
      formatter = new Intl.NumberFormat('pt-AO')
    }
  
    return formatter.format(value)
  }
  