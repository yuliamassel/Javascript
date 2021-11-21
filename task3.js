const done = (nilaiAwal,nilaiAkhir)=>{
    if (nilaiAwal <= 5) {
        return nilaiAwal      
    }else if (nilaiAkhir >= 5) {
        return nilaiAkhir
    }
}
const sum = ()=> {
    const dataArray = [2,7,9,12,15,16,17,21,28].filter(done)
    console.log(dataArray)
}
sum()

// const newAngka = dataArray.filter((nilaiAwal,nilaiAkhir)=>{    
//     if (nilaiAwal <= 5 ) {
//         return nilaiAwal
//     }else if (nilaiAkhir >= 5) {
//         return nilaiAkhir
//     }
// })

// console.log(newAngka)