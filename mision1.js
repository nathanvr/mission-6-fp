// Ejercicio 1
function numPasos(num){
    let contador = 0;

    while (num > 0){
        if (num%2 === 0){
            num /= 2;
            contador ++;

        }
        else{
            num -= 1
            contador++

        }
    }
    return contador;

}

// numPasos(14)
// numPasos(8)
// numPasos(123)

// Ejercicio 2
function contraseña(str){
    let chars = str.toLowerCase().split("")
    let password = "";
    
    chars.forEach(char => { 
        if(char === "a"){
            password += "4";
        }
        else if(char === "e"){
            password += "3";
        }
        else if(char === "i"){
            password += "1";
        }
        else if(char === "o"){
            password += "0";
        }
        else if(char === " "){
            password += "";
        }
        else{
            password+=char;
        }

    });
    return password;

}
contraseña("Hola Mundo")

//Ejercicio 3
function likes(num){
    if (num<1e3){
        return num.toString()
    }
    else if(num<1e6){
        num = Math.floor(num/1e3)
        return num.toString() + "K"
    }
    else{
        num = Math.floor(num/1e6)
        return num.toString() + "M"

    }
}
// console.log(likes(983))
// console.log(likes(1900))
// console.log(likes(54000))
// console.log(likes(120000))
// console.log(likes(25222444))


// Ejercicio 4
function generarCodigo(str){
    let arr = str.split(" ");
    let code = "";

        arr.forEach(element => {
            if(element === "") {
                code += ""
            }
            else{
                code += element[0] + element[1]
            }
        });
    
    return code;
}
console.log(generarCodigo("hola mundo")) // "homu"
console.log(generarCodigo("juan david berbeo")) // "judabe"
console.log(generarCodigo("")) // ""


// function generateCodigo(text) {
//     let code = "";
//     let words = text.split(" ");
  
//     words.forEach((word) => {
//       if (word.length >= 2) {
//         code += word.slice(0, 2);
//       } else if (word.length > 0) {
//         code += word[0];
//       }
//     });
  
//     return code;
//   }

//   console.log(generateCodigo("hola mundo")) // "homu"
// console.log(generateCodigo("juan david berbeo")) // "judabe"
// console.log(generateCodigo("")) // ""