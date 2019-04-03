export const formatMoney = money => {
  return money.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
