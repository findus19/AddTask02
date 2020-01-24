let num = 266219,
    str = num.toString(),
    array = str.split('');

let sum = 1;
for(i = 0; i <= array.length - 1; i++) {
    sum *= array[i];
}
console.log(sum);
let sum3 = sum ** 3;
console.log(sum3);

let str2 = sum3.toString();
console.log(str2.substr(-20, 2));