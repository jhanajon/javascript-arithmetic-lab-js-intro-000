var a, b

function add(a,b) {
 return a + b;
}

function subtract(a,b) {
 return a - b;
}

function multiply(a,b) {
 return a * b;
}

function divide(a,b) {
 return a / b;
}


function inc(a,b) {
 return a +1;
}

function dec(a,b) {
 return a - 1;
}

function makeInt(n) {
//`makeInt(a.toString())`).toEqual(a)
  return parseInt(n, 10)
  // (makeInt('0x2328')).toEqual(0)
//  n = 0;
}

function sayHello(name){
  return "Hello, " + name
}
