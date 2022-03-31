function carregar (){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
img.src='manha.jpg'               // BOM DIA  
document.body.style.background = '#FFFF00'
}
else if (hora >= 12 && hora <=18){
    img.src='tarde.jpg'           // BOA TARDE
    document.body.style.background = '#FF5A00'
}
else {
    img.src='noite.jpg'       //BOA NOITE
    document.body.style.background = '#120A8F'
}

}