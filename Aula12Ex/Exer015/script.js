function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Fano.value.length == 0 || Number(Fano.value) > ano){
        alert('Erro! Verifique os dados')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'iman/Hbaby.jpg')
            }
            else if(idade < 23){
                img.setAttribute('src', 'iman/Hjovem.jpg')
            }
            else if(idade <50){
                img.setAttribute('src', 'iman/Hadulto.jpg')
            }
            else{
                img.setAttribute('src', 'iman/Havo.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'iman/Mbaby.jpg')
            }
            else if(idade < 23){
                img.setAttribute('src', 'iman/Mjoven.jpg')
            }
            else if(idade <50){
                img.setAttribute('src', 'iman/Madulta.jpg')
            }
            else{
                img.setAttribute('src', 'iman/Mavo.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+ genero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}