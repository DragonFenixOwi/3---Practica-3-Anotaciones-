/* 
    ---------------------------------
        Author : Toni
        Juego: Piedra, papel, Tijera
    ----------------------------------
*/

//Recordar que las variables y fuciones siempre arriba por el tema de hosting

/*
    ------------------------
        VALRORES GLOBALES
    ------------------------
*/
//piedra =0  -  papel = 1     - tijera=2
var elementos_del_juego = ["pieda", "papel", "tijera"];


//funciones 
// jugador1 y jugador2 pertenecen solo al game
function game (jugador1,jugador2)
    {
        //Comprabar Empate
            if  (jugador1 == jugador2)
                {
                console.log(`Empate por ${elementos_del_juego[jugador1]}`);//empate por piedra, empate por papel`
                }
        //Ganador Judagor1
            else if  (jugador1 == 0 && jugador2 ==2 || jugador1 == 1 && 
                    jugador2 == 0 ||  jugador1 == 2 && jugador2 == 1)
                {
                    console.log(`Gana jugador1, porque ${elementos_del_juego[jugador1]} 
                    vale mas que ${elementos_del_juego[jugador2]} `);//empate por piedra, empate por papel`
                }
        //Ganador Judagor2
        else 
            console.log(`Gana jugador1, porque ${elementos_del_juego[jugador2]} 
            vale mas que ${elementos_del_juego[jugador1]} `);//empate por piedra, empate por papel`
            }





//Ver en consola
// "\=" que no relacione los "=" con ningun tipo de codigo
console.log("piedra \= 0, papel \= 1,  tijera \= 2")

// otra opcion seria obsoleta
console.log(`Empate por ${elementos_del_juego[jugador1]}`);