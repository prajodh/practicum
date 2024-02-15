const {add,sub,mul,div} = require("../arithematica")

test('2+5 is equal to 5',()=>{
    expect(add(2,3)).toBe(5);
});


test('100+10 is equal to 110',()=>{
    expect(add(100,10)).toBe(110);
});


test('23+5 is equal to 28',()=>{
    expect(add(23,5)).toBe(28);
});

test('23-5 is equal to 18',()=>{
    expect(sub(23,5)).toBe(18);
});


test('100/10 is equal to 10',()=>{
    expect(div(100,10)).toBe(10);
});

test('100*10 is equal to 1000',()=>{
    expect(mul(100,10)).toBe(1000);
});

