const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});
// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=>{
  expect(sum(20,1)).toBe(21)
});
// 2 + 5 เท่ากับ 7
test('2 + 5 เท่ากับ 7', function () {
  expect(sum(2,5)).toBe(7)
});
// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
// 2 + -5 เท่ากับ -3
test('2 + -5 เท่ากับ -3', function () {
  expect(sum(2,-5)).toBe(-3)
});
// 10 + -10 เท่ากับ 0
test('10 + -10 เท่ากับ 0', function () {
  expect(sum(10,-10)).toBe(0)
});
// 250 + 50 เท่ากับ 300
test('250 + 50 เท่ากับ 300', function () {
  expect(sum(250,50)).toBe(300)
});