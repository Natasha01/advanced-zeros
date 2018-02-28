module.exports = function getZerosCount(number, base) {

let j = 0;
let i = 2;
//Find simple factors of the number
let simple_factors = [];
let count_factors = [];
while (i < base) {
  if (base % i === 0) {
    if ((simple_factors[j - 1] != i)) {
      simple_factors[j] = i;
      count_factors[j] = 1;
      j++;
    } else {
      count_factors[j - 1]++;
    }
    base = base / i;
  } else {
  i++;
 }
}
if (simple_factors[j - 1] != i) {
  simple_factors[j] = i;
  count_factors[j] = 1;
} else {
	count_factors[j - 1]++;
}

//Consider zeros in the factorial of the number
let count_zeros = [];
let l = simple_factors.length;
for (j = 0; j < l; j++) {
  let count = 0;
  for (i = simple_factors[j]; number / i >= 1; i *= simple_factors[j]){
    count += Math.floor(number / i);
  } 
  count_zeros[j] = Math.floor(count / count_factors[j]);
}      
  
return Math.min.apply(0, count_zeros);

}