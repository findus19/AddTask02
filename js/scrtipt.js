let num = 266219,
    array = num.toString().split('');

let sum = 1;
for(i = 0; i <= array.length - 1; i++) {
    sum *= array[i];
}
console.log(sum);

console.log((sum ** 3).toString().slice(0, 2));