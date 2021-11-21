// let name = [
//     'Abigail', 'Alexandra','Alison',
//     'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
//     'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
// ]
// let searchName = "car"
// let input = new RegExp (searchName +'.+$', 'i')
// name = name.filter((inputName, callback)=>{ 
//         return inputName.search(input) != -1       
// })
// console.log(name)


const name = [
        'Abigail', 'Alexandra','Alison',
        'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Dinda', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]

const searchName = (names,put) => {
    return names.filter(function(iden){
        return iden.toLowerCase().indexOf(put.toLowerCase())  !== -1
    })
}
console.log(searchName(name,'an'))