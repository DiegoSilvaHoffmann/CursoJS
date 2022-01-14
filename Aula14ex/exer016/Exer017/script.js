function Calcular(){
    let num = document.getElementById('inicio')
    let res = document.getElementById('res')

    res.innerHTML = ""
    for(var c = 1; c <= 10; c++){
        let n = Number(num.value)
        var mult = n * c
        res.innerHTML += c + ' X ' + n + ' = ' + mult + '<br>'
    }
}