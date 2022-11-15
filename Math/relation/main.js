function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}
console.log(factorial(5));
   //5*4*3*2*1 5! =120
