
function Carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()


    if(hora >= 6 && hora < 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e7c396'
        msg.innerHTML = 'Bom diaaaa! Agora sao ' + hora + ' horas'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#d79d4e'
        msg.innerHTML = 'Boa tarde! Agora sao ' + hora + ' horas'
    }
    else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#040316'
        msg.innerHTML = 'Psiuuu! Boa noite... Agora sao ' + hora + ' horas'
    }

}
