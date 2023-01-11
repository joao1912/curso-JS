/*
(function() {
    imc(57,1.65)
    function imc(peso = 0,altura = 0) {
        let imc = 0
        if(peso === 0 || altura == 0) {
            throw Error("Dados Incompletos")
        }
        if(typeof peso !== "number" || typeof altura !== "number") {
            throw Error("Only Numbers")
        } else {
            imc = peso / (altura**2)
            console.log(TabImc(imc))
        }
    }

    function TabImc(IMC) {
        if (IMC >= 16 && IMC <= 16.9) {
            return "Muito Abaixo do Peso"
        } else if (IMC >=17 && IMC <= 18.4) {
            return "Abaixo do Peso"
        } else if(IMC >= 18.5 && IMC <= 24.9) {
            return "Peso Normal"
        } else if(IMC >= 24.9 && IMC <= 29.9) {
            return "Acima do Peso"
        } else if(IMC >= 30 && IMC <= 34.9) {
            return "Obesidade Grau 1"
        } else if(IMC >= 35 && IMC <= 40) {
            return "Obesidade Grau 2"
        } else if(IMC >= 40 && IMC <= 90) {
            return "Obesidade Grau 3"
        } else {
            throw Error("Dados Irreais")
        }
    }
})()
*/

(function(){
    let peso = 0
    let altura = 0
    function calcImc(F) {
        let imc = 0
        if(typeof altura !== "number" || typeof peso !== "number") {
            throw Error("OnlyNumbers")
        } else {
            if(peso == 0 || altura == 0) {
                throw Error("Dados Incompletos")
            }
            if(typeof F !== "function") {
                return peso / (altura**2)
            } else {
                imc = peso / (altura**2)
            if (imc > 80) {
                throw Error("Valores Irreais")
            } else {
                console.log(F(imc))
            }
            }
        }
    }
                                       /*INCOMPLETO*/ 
    calcImc(function(IMC){
        if (IMC >= 16 && IMC <= 16.9) {
            return "Muito Abaixo do Peso"
        } else if (IMC >=17 && IMC <= 18.4) {
            return "Abaixo do Peso"
        } else if(IMC >= 18.5 && IMC <= 24.9) {
            return "Peso Normal"
        } else if(IMC >= 24.9 && IMC <= 29.9) {
            return "Acima do Peso"
        } else if(IMC >= 30 && IMC <= 34.9) {
            return "Obesidade Grau 1"
        } else if(IMC >= 35 && IMC <= 40) {
            return "Obesidade Grau 2"
        } else if(IMC >= 40 && IMC <= 90) {
            return "Obesidade Grau 3"
        } else {
            throw Error("Erro Inesperado")
        }
    })
    
})()

