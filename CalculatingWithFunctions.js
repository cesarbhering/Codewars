//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(func1) {return func1 ? Math.trunc(eval(0 + func1[1] + func1[0])) : 0}
function one(func1) {return func1 ? Math.trunc(eval(1 + func1[1] + func1[0])) : 1}
function two(func1) {return func1 ? Math.trunc(eval(2 + func1[1] + func1[0])) : 2}
function three(func1) {return func1 ? Math.trunc(eval(3 + func1[1] + func1[0])) : 3}
function four(func1) {return func1 ? Math.trunc(eval(4 + func1[1] + func1[0])) : 4}
function five(func1) { return func1 ? Math.trunc(eval(5 + func1[1] + func1[0])) : 5}
function six(func1) {return func1 ? Math.trunc(eval(6 + func1[1] + func1[0])) : 6}
function seven(func1) { return func1 ? Math.trunc(eval(7 + func1[1] + func1[0])) : 7}
function eight(func1) {return func1 ? Math.trunc(eval(8 + func1[1] + func1[0])) : 8}
function nine(func1) {return func1 ? Math.trunc(eval(9 + func1[1] + func1[0])) : 9}

function plus(y) { return [y, '+'] }
function minus(y) { return [y, '-'] }
function times(y) { return [y, '*'] }
function dividedBy(y) { return [y, '/'] }


//console.log(seven(times()))