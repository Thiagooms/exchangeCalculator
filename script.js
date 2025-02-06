let dolar = 5.8

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.value = "1,00"
convert("usd-to-brl")

function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        //Não coloca ponto ou virgula nos num, ex 1,000 1.000, ao invês disso fica da seguinte forma, 1000,00 - 1000.00
        useGrouping: false,
        minimumFractionDigits: 2,
    }
    //lib interna do js para formatar numeros internacionais
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue) 
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if(type === "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2)
        brlInput.value = formatCurrency(result)
    }
    else if(type === "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result)
        


    }
}