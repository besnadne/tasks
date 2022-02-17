
// 1) need to do a transformation of the array with diff numbers [1  ... n]  - we need to reverse it without using the reverse method and return in format [n  ... 1]
// Arguments: array
// Result: array

function task_1 (array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = array[array.length - 1 - i]
    }
    return result
}

// 2) need to check two arrays with the random count of items - that they have the same items. The order of items and arrays length can be different.  we need to get a boolean type as a result
// Arguments: array1, array2
// Result: boolean

function task_2 (array1, array2) {
    let smallerArray = array1.length < array2.length ? array1 : array2;
    let biggerArray = array1.length > array2.length ? array1 : array2;
   biggerArray = biggerArray.filter(el => smallerArray.includes(el))
   console.log(biggerArray)
   return biggerArray.length === smallerArray.length ? true: false
}


// 3) need to check the array with structure [ {id: (int), value: (any) } ]. we should group it by id property and count the same value property types. equal objects should be counted only 1 time. as response we should return array with the structure [ {id: 1, number: 1, string: 10 } ]
// Arguments: [ {id: (number), value: (any) } ]
// Result: array

function task_3 (array){

     result = array.reduce ((acc, cur) =>{
        acc[cur.id] = acc[cur.id] || []
        acc[cur.id].push(cur);
        return acc
     }, {})

     
     for(let key in result){
        let arr = result[key].reduce((acc, cur) => {
            let counter = 0;
            for(let i in acc){
                acc[typeof cur.value] = counter
                if(i === typeof cur.value) {
                    counter ++
                }else{
                    counter = 0
                } 
            }
            acc.id = +key
            return acc
            
        },{})
     }
  return {}
}

console.log(task_3([{id: 1, value: 2},{id: 1, value: 'asd'},{id: 2, value: 'asd'},{id: 2, value: 2}]))

// 4) need to count the difference (paired - unpaired) in the sum of all values paired and unpaired indexes from the array with integers. As a response, we should return an integer value.
// Arguments: [ 1, 44, 2234, 0, 4, -1 ] positive and negative numbers
// Result: integer

function task_4 (array) {
    let paired = [];
    let unpaired = [];
    array.forEach(el => el % 2 === 0 ? paired.push(el): unpaired.push(el));
    let sumOfPaired = paired.reduce((acc, value) => acc + value);
    let sumOfUnpaired = unpaired.reduce((acc, value) => acc + value);
    return sumOfPaired - sumOfUnpaired;
}


// 5) we should return all indexes from the string with random lengths where the needed character exists. as the response, we should return an array with integer values
// Arguments: 'asdasdasdasd' 'a' (two strings)
// Result: array with integer

function task_5 (string ,char) {
    let result = [];
    string = string.split('');
    for(let i = 0; i < string.length; i++){
        if(string[i] === char) {
            result.push(i)
        }
    }
    return result;
}

// 6) we should return the max count of characters repeating from the string with random length with case insensitive search. as the response, we should return the integer value
// Arguments: 'asdasdasdasd' 'a' (two random strings)
// Result: integer

function task_6(string, char){
    string = string.toLowerCase().split('');
    char = char.toLowerCase();
    let counter = 0;
    string.forEach(el => {
        if(el === char){
            counter ++;
        }
    })
    return counter;
}

// 7) need to do a transformation of array with structure [ {currency: (string), value: (any) } ], need to do sum of all valid values grouped by currency property and return an array in format [ 'USD:12.00', 'EUR:1.02', UAH:3.00']
// Arguments: [ {currency: (string), value: (any) }, ….. ,{currency: (string), value: (any) } ]
// Result: array with strings [ 'USD:12.00', 'EUR:1.02', UAH:3.00']

let a = [{currency: 'USD', value: 23 },{currency: 'EUR', value: 23 },{currency: 'UAH', value: 23 },{currency: 'USD', value: 23 }]
function task_7(array){
    const result = array.reduce((acc, cur) => {
        if (acc.some(({ currency }) => currency === cur.currency)) {
          return acc.map(item => ({ ...item, value: item.currency === cur.currency ? cur.value + item.value : item.value }));
        } else acc.push(cur);
      
        return acc;
      }, []);
     return result
}

// 8) need to do a transformation of the array with random elements and types. need to take only alphanumeric characters and spaces and do concatenation of elements. as the response, we should return the string value
// Arguments: [ 1, ‘asd’, ‘ff’,  ' ', null, false]
// Result: string

function task_8(array){
    let result = array.filter(el => {
        if(typeof el === 'string' || typeof el === 'number' || el === ''){
            return el
        }
    })
    return result.join('')
}

// 9) need to do a transformation of the array with structure [ {id: (int), done: (bool) } ]. We need to check that all objects marked as done (done == true). we need to get a boolean type as a result
// Arguments: [ {id: (int), done: (bool) }, {id: (int), done: (bool) } ]
// Result: boolean

function task_9(array){
    return  array.every(el => {
        return el.done === true
     });
}

// 10)  need to replace each plaintext letter with a different one in a fixed number of places (can be negative too) down the English alphabet. For example 'D' will be transformed into 'A', 'E' will be transformed into 'B', and so on if the key will be queal 3. As a result, we should get a string value.
// Arguments: 'Lorem ipsum dolor sit amet.' 3
// Result: string
function task_10(string, key) {
    let result = '';
    for (let i = 0; i < string.length; i++) {

        let charCode = string[i].charCodeAt();
        if (charCode > 96 && charCode < 123) {
            charCode += key % 26
            if (charCode > 122) {
                charCode = (charCode - 122) + 96;
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
        }

        if (charCode > 64 && charCode < 91) {

            charCode += key % 26

            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }

        result += String.fromCharCode(charCode);
    }

    return result
}

export {task_1, task_2, task_3, task_4, task_5, task_6, task_7, task_8, task_9, task_10}



