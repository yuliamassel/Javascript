
// import {generateToken} from './library/generate.js'

// import { encrypt } from "crypto-js/aes";


// const data = {email: 'masselyulia8@gmail.com', password: 'massel123'}

// const formLogin = ({email,password}) => {
//     return formLogin(email,password)    
// }

// console.log(SHA256(data))

var CryptoJS = require("crypto-js")
let crypt = {
    secret : "MASSEL123",
    encrypt : (password)=>{
        let cipher = CryptoJS.AES.encrypt(password,crypt.secret)
        cipher = cipher.toString()
        return cipher
    },

    decrypt : (cipher) => {
        let decipher = CryptoJS.AES.decrypt(cipher,crypt.secret)
        decipher = decipher.toString(CryptoJS.enc.Utf8)
        return decipher
    }
}

let cipher = crypt.encrypt("ini password")
console.log(cipher)

let decipher = crypt.decrypt(cipher)
console.log(decipher)