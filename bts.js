
alert ('Estas Conectado :)')

//nombre de usuario
var app ="Trivia BTS"
var userName = prompt("Bienvenido a la Trivia sobre BTS, Introduce tu Nombre")
console.log(userName) // muestrame el UserName 

//accerder desde el html  desde JavaScript document
document.getElementById("title").innerHTML= ("Proyecto :  " + app)
//document.body.style.background = "purple"
// pintar en el documento en el h2
document.getElementById("user_name").innerHTML = ("Bienvenid@" + userName)

// Preguntar si va a jugar
var confirmAction = confirm("¿Quieres jugar esta trivia sobre BTS?")
if (confirmAction) {
     alert("Ingresa el numero que corresponde a tu respuesta");
     var firstQuestion = prompt("¿Cuantos integrantes hay? \n 1. 7 \n 2. 10 \n 3. 13")
     // respuesta correcta
     if (firstQuestion == 1) {
        alert("¡Excelente! Pasemos a la siguiente");   
        } else {
        alert("Incorrecto :(")
        }
        document.getElementById("respuestaunoc").innerHTML = firstQuestion ;
      
        var secondQuestion = prompt( "¿Que significa BTS? \n 1. Chicos \n 2. Chicos a prueba de balas \n 3. Betese ")
     if (secondQuestion == 2) {
         alert ("¡Excelente! Pasemos a la siguiente")
     } else {
        alert("Incorrecto :(")  
     }
     document.getElementById("respuestadosc").innerHTML = secondQuestion;

     var thirdQuestion = prompt("¿De que pais son? \n 1. China \n 2. Japon \n 3. Korea del sur")
     if (thirdQuestion == 3) {
        alert ("¡Excelente! Pasemos a la siguiente")
    } else {
       alert("Incorrecto :(")  
    }
    document.getElementById("respuestatresc").innerHTML = thirdQuestion;

     var fourthQuiestion = prompt("¿Que tipo de muisca hacen? \n 1. Kpop \n 2. Pop \n 3. Clasica")
     if (fourthQuiestion == 1) {
        alert ("¡Excelente! Pasemos a la siguiente")
    } else {
       alert("Incorrecto :(")  
    }
    document.getElementById("respuestacuatroc").innerHTML = fourthQuiestion;

     var fifthQuestion = prompt("¿Cual es la cancion del momento? \n 1. Dynamite \n 2. Premission To Dance \n 3. Boy with Luv")
     if (fifthQuestion == 2) {
        alert ("¡Excelente! Pasemos a la siguiente")
    } else {
       alert("Incorrecto :(")  
    }
    document.getElementById("respuestacincoc").innerHTML = fifthQuestion;

     var sixthQuestion = prompt("¿Quienes con los integrantes de BTS? \n 1. V \n 2. JungKook \n 3. RM \n 4. JiMin \n 5. J-Hope \n 6. Agust D\n 7. Jin \n 8. Todos \n 9. Ninguno")
     if (sixthQuestion == 8) {
        alert ("¡Excelente! Pasemos a la siguiente")
    } else {
       alert("Incorrecto :(")  
    }
    document.getElementById("respuestaseisc").innerHTML = sixthQuestion;
     var seventhQuestion = prompt("¿Cual es la marca oficial de BTS? \n 1. BT21 \n 2. Bt55 \n 3. BTS")
     if (seventhQuestion == 1) {
        alert ("¡Excelente! Pasemos a la siguiente")
    } else {
       alert("Incorrecto :(")  
    }
    document.getElementById("respuestasietec").innerHTML = seventhQuestion;

} else {
   var estadistics = confirm("Al dar Aceptar puedes responder solo dos preguntas, quieres responderlas?")
   if ( estadistics == true) {
    alert("Ingresa el numero que corresponde a tu respuesta")
    var eighthQuestion = prompt("¿Por que no te gusta BTS? \n 1. Me parece aburrido \n 2. No tienen estilo")
    var ninthQuestion = prompt("¿Que no te gusta? \n 1. Son iguales todos \n 2.Son chinos")
    var tenthQuestion = prompt("¿Por que estas en esta pagina? \n 1. Curiosidad \n 2. Aburrimiento ")
    document.getElementById("cancelado").innerHTML = ("Gracias por tus respuestas, lamentablemente temo decirte que esta pagina no es para ti, ADIOS" + userName)
   }
    else {
         alert('Gracias por tus respuestas, lamentablemente temo decirte que esta pagina no es para ti, ADIOS')
     }
   
  
//  preguntas incorrectas (i)
   document.getElementById("preguntaunoi").style.display="none"
   document.getElementById("preguntadosi").style.display="none"
   document.getElementById("preguntatresi").style.display="none"
   document.getElementById("preguntacuatroi").style.display="none"
   document.getElementById("preguntacincoi").style.display="none"
   document.getElementById("preguntaseisi").style.display="none"
   document.getElementById("preguntasietei").style.display="none"
   document.getElementById("headercorrectas").style.display="none";
   document.getElementById("headerincorrectas").style.display="none"

}

