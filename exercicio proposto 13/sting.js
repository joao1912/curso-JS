(function(){
    let numeroTelefone = "91234-5678"
    let outroNumero = "1234-5678"
    function mascararNumero(numero){
        let ifemIndex = numero.indexOf("-")
        let primeiroNumero = numero.slice(0,ifemIndex)
        let ultimosNumeros = numero.slice(ifemIndex + 1)
        let DoisultimosNumeros = numero.slice(ifemIndex + 3)
        return `${numero[0].padEnd(primeiroNumero.length, "*")}-${DoisultimosNumeros.padStart(ultimosNumeros.length, "*")}`
    }
    
    console.log(mascararNumero(numeroTelefone))
})()