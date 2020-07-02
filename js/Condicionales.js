/* 
    ---------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        CONDICIONALES JAVASCRIPT 
    ----------------------------------
*/


// CONDICIONALES ---- > lo que esta adentro del parentesis condiciona una acción

/* 
    - CASO AISLADO - ERROR al intentar realizar un git pull (merge + ) 
        - Con el fin de unir mi repositorio local de Visual Studio Code 
        - Con el repositorio en la nube de github  
    - Y tiene que ver en la manera como github crea los primeros archivos
    - COMANDO GIT 
        - git pull origin master --allow-unrelated-historiesg
*/



/*
    ----------------------------
        CONDICIONAL IF BÁSICO 
    ----------------------------
*/

var num =1;

if (true)
    {
        console.log('Dime Buenos dás');
    }

if (false)
    {
        console.log('No me imprime Buenos dás');
    }

    


/*
    ----------------------------
        CONDICIONAL IF -ELSE
    ----------------------------
*/


//if - else  (si hay sol o no hay sol)
var num = 'sol';       // la variable num se convertira depende del valor que le pongamos

if (num == 'sol')
    {
        console.log('Buenos días');
    }
else
    {
        console.log(' Buenos Noches');
    }




// Una nueva condicional if-else 

var tiempo = 'sol';       // la variable num se convertira depende del valor que le pongamos


// si la linea 57 es verdad ejecuto la linea 60. pero despues sigue ejecutando las condionales que siguen
if (tiempo == 'sol')
    {
        console.log('Buenos días');
    }
else if (tiempo == 'nublado')
    {
        console.log(' Esta nublado, no salgas a la calle');
    }
else
    {
        console.log(' Buenos Noches');
    }


/*
    ---------------
        SWITCH
    ---------------
*/


/*
    SWITCH
        - Diferentes casos, con una variable. Variable "tiempo"
        - ponerle "break" a cada "case" es obligatorio
        - "brak" es diferente que if. Rompe todo y corta toda ejecución
*/

var tiempo = 'sol'; 

switch(tiempo)
    {
        case 'sol':                 //sintaxis utilizamos ":" dos puntos
            console.log('');
            idiomas();             // Funcion que diga "buenos dias" en 20 idiomas
            break;                  
        case 'nublado' && 'tarde':
            console.log('No salgas a la calle');
            break;                  
        case 'madrugada'>'luna':
            console.log('Buenas noches');
            break;
        default:                    //(opcional) : Si todo esto no se cumple "yo tengo algo que decir"
            console.log('Estamos en Jupiter');
    }




/*
    -------------
        ARRAY 
    -------------
*/

/*
    -ARRAY O lista segun que lenguaje
*/

// aqui solo podemos asignar un valor ejecuto
var num = 0;
var num = 'texto_asigando';
var num = true;

var mascotas =['perro','gato','serpiente'];
// posicion_0 = la cero = perro   -  posicion_1 = gato

//metodos  seria "mascotas.length"
console.log(mascotas.length);

//esta mal
//solo podemos utilizar los metodos a objetos no a variables 

var animal ='perro';
console.log(animal.length);


// acceder a los datos guardados en el ARRAY
mascotas[0];  // accedo a perro
mascotas[1];  // accedo a gato
mascotas[2];  // accedo a serpiente

mascotas.length;
// nos da el tamaño del array 

// insertar un elemento nuevo dentro del array de mascotas
// push me añade elementos al final
mascotas.push('canario');
mascotas.push('largato');

//pop  - eliminar elementos del final. Es la que se utiliza mas
mascotas.pop();

// unshift  -Inserta elementos desde el inicia desde el inicio
mascotas.unshift('alcon milenario');

//shift  - elimina elementos desde el principio
mascotas.shift();

//indexOP - me dice en que posicion esta "gato"
mascotas.indexOf('gato');


var mascotas =['perro','gato','serpiente'];

// nuevo array
var mascotas_plus =
    [
        'perro', 4, 'boby',
        'gato', 12, 'nisha'
    ];

var pregunta = mascotas_plus.indexOf('nisha');
//resultado 5

//mascotas_plus[4] // me devolveria con un 12
//pregunta = vale igual a 5. Entonces "5-1" = 4 ¿que hay en la posicion 4?  hay el numero "12"
/* 
    posiciones 
        0 = perro
        1 = 4
        2 = boby
        3 = gato
        4 = 12
        5 = nisha  
*/
var edad = mascotas_plus[pregunta -1];
//12
var raza = mascotas_plus [pregutna -2];
// gato

