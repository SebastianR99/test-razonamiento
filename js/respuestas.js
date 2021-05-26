const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const r5 = document.getElementById('r5');
const r6 = document.getElementById('r6');
const r7 = document.getElementById('r7');
const r8 = document.getElementById('r8');
const r9 = document.getElementById('r9');
const r10 = document.getElementById('r10');

function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, aciertos, fallas, porcentaje;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p22').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p34').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p42').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('p66').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('p74').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('p92').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('p04').checked==true) {p10=1}
    else {p10=0}

    aciertos=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    fallas = 10 - aciertos;
    porcentaje = aciertos * 10;
    
    if(aciertos <= 6){
        Swal.fire({
            icon: 'error',
            title: 'Uy...',
            html: 'Parece ser que no pasaste <br> <b> Aciertos: </b>' + aciertos + ' <br> <b>Fallas: </b>' + fallas + ' <br> <b> Porcentaje: </b>' + porcentaje 
            + '% <br> Vuelve en las preguntas para mirar sus respuestas o haz la prueba nuevamente.',
            confirmButtonText: 'Cerrar'
          })
    } else{
        Swal.fire({
            icon: 'success',
            title: '¡Felicitaciones!',
            html: 'Aprobaste la prueba <br> <b> Aciertos: </b>' + aciertos + ' <br> <b>Fallas: </b>' + fallas + ' <br> <b> Porcentaje: </b>' + porcentaje 
            + '% <br> Vuelve en las preguntas para mirar sus respuestas o haz la prueba nuevamente.',
            confirmButtonText: 'Cerrar'
          })
    }

    r1.innerHTML = "<b>Respuesta: </b> A.";
    r2.innerHTML = "<b>Respuesta: </b> C.";
    r3.innerHTML = "<b>Respuesta: </b> D.";
    r4.innerHTML = "<b>Respuesta: </b> B.";
    r5.innerHTML = "<b>Respuesta: </b> C.";
    r6.innerHTML = "<b>Respuesta: </b> C.";
    r7.innerHTML = "<b>Respuesta: </b> D.";
    r8.innerHTML = "<b>Respuesta: </b> A.";
    r9.innerHTML = "<b>Respuesta: </b> B.";
    r10.innerHTML = "<b>Respuesta: </b> D.";
}


function retry(){
    location.reload();
    window.scroll(0, 0);
}
