let num = 266219,
    str = num.toString(),
    array = num.toString().split('');

let sum = 1;
for(i = 0; i <= array.length - 1; i++) {
    sum *= array[i];
}
console.log(sum);

console.log(sum ** 3);

let str2 = sum.toString();
console.log(sum.toString().substr(-10, 2));