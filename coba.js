// ini callback function
// const inputName = (name)=>{
//     return name
// }
// const greetings = (quote)=>{
//     return `${quote}, senang bertemu kalian!`
// }

// const sayHello = (name,callback)=>{
//     const hello = `Hello saya ${name} dan umurku 12`
//     return callback(hello)
// }
// console.log(sayHello(inputName('Ari Wibowo'),greetings))
// const str = 'kata ku word'
// const word ={
//     toUppercase: ()=>{        
//         return str.toUpperCase()
//     },
//     toLowercase: ()=>{
//         return str.toLowerCase()
//     },
//     replace: ()=>{
//         return str.replace('word','entah')

//     }
// }

// console.log(word.replace())

const name = [
    'Abigail', 'Alexandra','Alison',
    'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]
function sumUP(arr) {
  let sum = 'an'
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = (sum / arr.length);
  return avg;
}
function display(arr, callback) {
  const avg = callback(arr);
  console.log("Average of array is " + avg)
}
display(name, sumUP);