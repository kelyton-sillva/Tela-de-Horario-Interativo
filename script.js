function carregar (){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById('imagem')
var bom = window.document.getElementById('bom')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`


if (hora >= 5 && hora < 12){
img.src='manha.jpg'               // BOM DIA  
document.body.style.background = '#FFFF00'
bom.innerHTML = 'Bom dia'

}
else if (hora >= 12 && hora <18){
    img.src='tarde.jpg'           // BOA TARDE
    document.body.style.background = '#FF5A00'
    bom.innerHTML = 'Boa tarde'
}
else {
    img.src='noite.jpg'       //BOA NOITE
    document.body.style.background = '#120A8F'
    bom.innerHTML = 'Boa noite'
}



}