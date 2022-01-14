function Contar(){
    var ini = document.getElementById('inicio')
    var fin = document.getElementById('final')
    var salto = document.getElementById('salto')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fin.value.length == 0 || salto.value.length == 0){
        alert("ERRO! Complete os campos!")
    }else{
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(salto.value)

        if(p <= 0){
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ' \u{1F449} ' + c
            }
        }else{
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ' \u{1F449} ' + c 
            }
        }
        res.innerHTML += '<br>fim!'
    }
}
