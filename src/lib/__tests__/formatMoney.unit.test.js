import { formatMoney } from '../formatMoney';


describe('formatMoney', () => {
  test('format 0', () => {
    expect(formatMoney(0)).toBe('0.00');
   
  });
  test('format 15000', () => {
    expect(formatMoney(15000)).toBe('15,000.00');
  });
  test('format -666', () => {
    expect(formatMoney(-666)).toBe('-666.00');
  });
})

