const arrays = [];
const data_subset = [];
const numsubset = 3;
const maxLength = 10;
const minNumber = 0;
const maxNumber = 100;

/**
* Generate a random number between min and max
* {*Int} min
* {*Int} max
*/
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Setting array by random number
for (let i= 0; i <= maxLength; i++) {
	const num = generateRandomIntegerInRange(minNumber, maxNumber)
  if (isNaN(num)) break;
  arrays.push(num)
}

console.log(`Data array by random : [${arrays}]`)

/**
*	{*Array} arr
* {*Int} num
*/
function findMaxInMin(arr, num) {
  let index = 0
  // membagi array sesuai data numb
  for (let i = 0; i < arr.length; i++) {
    let sumset = index * num; 
    if (sumset > arr.length) break
    data_subset.push(arr.slice(sumset, sumset + num));
    index += 1
  }
  console.log(`Dibagi berdasarkan kelipatan ${num}: `, data_subset)
  
    // Mencari nilai terkecil dari list
  let new_arr = []
  for (let i = 0; i < data_subset.length; i++) {
  	const el = data_subset[i];
    new_arr.push(el.sort()[0])
  }
  console.log(`Mapping nilai terkecil dari setiap data: [${new_arr}]`)
  
  console.log(`Mengembalikan nilai terkecil dari data ${new_arr.sort()[0]}`)
  return new_arr.sort()[0]
}


findMaxInMin(arrays, numsubset)
