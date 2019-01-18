const minus = require('./minus');
// 1 - 2 เท่ากับ -1
test('1 - 2 เท่ากับ -1', function () {
    expect(minus(1,2)).toBe(-1)
})
// 10 - 2 เท่ากับ 8
test('10 - 2 เท่ากับ 8', function () {
    expect(minus(10,2)).toBe(8)
})
// 3 - 2 เท่ากับ 1
test('3 - 2 เท่ากับ 1', ()=> {
    expect(minus(3,2)).toBe(1)
})
// -1 - 2 เท่ากับ -3
test('-1 - 2 เท่ากับ -3', ()=>{
    expect(minus(-1,2)).toBe(-3)
})
// -1 - -2 เท่ากับ 1
test('-1 - -2 เท่ากับ 1', ()=>{
    expect(minus(-1,-2)).toBe(1)
})