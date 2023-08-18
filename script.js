document.addEventListener("DOMContentLoaded", function() {

    const calcularButtonIMC = document.querySelector("#ejercicio1 #calcular");
    const resultadoElementIMC = document.querySelector("#ejercicio1 #resultado");

    calcularButtonIMC.addEventListener("click", function() {
        const peso = parseFloat(document.querySelector("#ejercicio1 #peso").value);
        const altura = parseFloat(document.querySelector("#ejercicio1 #altura").value);

        if (isNaN(peso) || isNaN(altura)) {
            resultadoElementIMC.textContent = "Ingrese valores válidos.";
        } else {
            const bmi = calcularBMI(peso, altura);
            const categoria = determinarCategoriaBMI(bmi);
            resultadoElementIMC.textContent = `Tu IMC es: ${bmi.toFixed(2)} - ${categoria}`;
        }
    });

    function calcularBMI(peso, altura) {
        return peso / (altura * altura);
    }

    function determinarCategoriaBMI(bmi) {
        if (bmi < 18.5) {
            return "Bajo de peso";
        } else if (bmi < 25) {
            return "Normal";
        } else if (bmi < 30) {
            return "Sobrepeso";
        } else {
            return "Obeso";
        }
    }

    const convertirButton = document.querySelector("#ejercicio2 #convertir");
    const resultadoLikesElement = document.querySelector("#ejercicio2 #resultadoLikes");

    convertirButton.addEventListener("click", function() {
        const cantidad = parseInt(document.querySelector("#ejercicio2 #cantidad").value);
        const resultado = likes(cantidad);
        resultadoLikesElement.textContent = resultado;
    });

    function likes(number) {
        if (number < 1000) {
            return number.toString();
        } else if (number < 1000000) {
            const thousands = (number / 1000).toFixed(0);
            return `${thousands}K`;
        } else {
            const millions = (number / 1000000).toFixed(0);
            return `${millions}M`;
        }
    }

    const loginForm = document.querySelector("#ejercicio3 #loginForm");
    const messageElement = document.querySelector("#ejercicio3 #message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.querySelector("#ejercicio3 #username").value;
        const password = document.querySelector("#ejercicio3 #password").value;

        if (isValidLogin(username, password)) {
            messageElement.textContent = "Inicio de sesión exitoso.";
        } else {
            messageElement.textContent = "Nombre de usuario o contraseña incorrectos.";
        }
    });

    function isValidLogin(username, password) {
        const validUsername = "usuario";
        const validPassword = "contraseña";

        return username === validUsername && password === validPassword;
    }

    const calcularImpuestosButton = document.querySelector("#ejercicio4 #calcularButton");
    const resultadoImpuestosElement = document.querySelector("#ejercicio4 #resultadoImpuestos");

    calcularImpuestosButton.addEventListener("click", function() {
        const edad = parseInt(document.querySelector("#ejercicio4 #edad").value);
        const ingresos = parseFloat(document.querySelector("#ejercicio4 #ingresos").value);

        let impuestos = 0;

        if (edad < 18) {
            impuestos = ingresos * 0.1;
        } else if (edad >= 18 && edad <= 64) {
            impuestos = ingresos * 0.2;
        } else {
            impuestos = ingresos * 0.15;
        }

        resultadoImpuestosElement.textContent = `Impuestos a pagar: $${impuestos.toFixed(2)}`;
    });


    function imprimirArreglo(...elementos) {
        const ul = document.createElement('ul');
      
        elementos.forEach((elemento, index) => {
          const li = document.createElement('li');
          li.textContent = `${index + 1}. ${elemento}`;
          ul.appendChild(li);
        });
      
        document.body.appendChild(ul);
    }
      
    
    function numeroDeCaracteres(texto, caracter) {
        let contador = 0;

        for (let i = 0; i < texto.length; i++) {
            if (texto.charAt(i) === caracter) {
                contador++;
            }
        }

        return contador;
    }

    const calcularButtonCaracteres = document.querySelector("#ejercicio6 #calcularCaracteres");
    const resultadoElementCaracteres = document.querySelector("#ejercicio6 #resultadoCaracteres");

    calcularButtonCaracteres.addEventListener("click", function() {
        const texto = document.querySelector("#ejercicio6 #texto").value;
        const caracter = document.querySelector("#ejercicio6 #caracter").value;

        const cantidad = numeroDeCaracteres(texto, caracter);
        resultadoElementCaracteres.textContent = `El caracter "${caracter}" aparece ${cantidad} veces en el texto.`;
    });

    const calcularSumaButton = document.querySelector("#calcularSuma");
const resultadoSumaElement = document.querySelector("#resultadoSuma");

calcularSumaButton.addEventListener("click", function() {
    const numerosInput = document.querySelector("#numeros").value;
    const numerosArray = numerosInput.split(",").map(Number);

    const suma = sumarArreglo(numerosArray);
    resultadoSumaElement.textContent = `La suma es: ${suma}`;
});

function sumarArreglo(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    return suma;
}
const calcularMaximoButton = document.querySelector("#ejercicio10 #calcularMaximo");
const resultadoMaximoElement = document.querySelector("#ejercicio10 #resultadoMaximo");

calcularMaximoButton.addEventListener("click", function() {
    const numerosInput = document.querySelector("#ejercicio10 #numerosMaximo").value;
    const numerosArray = numerosInput.split(",").map(Number);

    if (numerosArray.length > 0) {
        const maximo = encontrarMaximo(numerosArray);
        resultadoMaximoElement.textContent = `Máximo: ${maximo}`;
    } else {
        resultadoMaximoElement.textContent = "Ingrese al menos un número.";
    }
});

});


