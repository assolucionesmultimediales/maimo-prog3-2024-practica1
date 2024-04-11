/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

//1
// Importar el array de canciones
import songs from './songs.js'; // import nos permite traer el modulo que queremos
                                //dandole la ruta (siempre y cuando este export en el otro modulo)
console.log('1',songs);//para ver el array de canciones en este archivo

//2 Usa la función map para crear un nuevo array 
//con el título de cada canción en letras mayúsculas.

/*La función map() es un método disponible en los arrays en JavaScript que 
se utiliza para iterar sobre cada elemento de un array y aplicar una función a cada uno
de esos elementos, devolviendo un nuevo array con los resultados de aplicar la función 
a cada elemento.

La sintaxis básica de map() es la siguiente:

const newArray = array.map((element, index, array) => {
  // Código para transformar cada elemento del array
  return transformedElement;
});

element: El elemento actual del array que está siendo procesado.
index (opcional): La posición del elemento actual dentro del array.
array (opcional): El array sobre el que se está iterando.
La función proporcionada como argumento a map() se llama una función de transformación.
Toma un elemento del array como entrada y devuelve el resultado transformado.

Mi ejercicio:

const titlesUpperCase = songs.map(song => {
    return song.title.toUpperCase();
  });
    console.log(titlesUpperCase);*/

/*resolusión del profesor: utilizar map() para crear un nuevo array
con el contenido especidfico que queremos dentro del modulo songs y modificarlo
como querramos, en este caso toUpperCase():

//const titlesUpperCase = songs.map((song) => song.title.toUpperCase())
//console.log('2',titlesUpperCase);

//Luego mejoro la sintaxis utilizando la desestructuracion del elemento que necesitabamos{title}*/
const titlesUpperCase = songs.map(({title}) => title.toUpperCase()); 
// agarramos con la desestructuracion directamente el elemento que queremos 
//y le aplicamos la funcion que necesitamos
console.log('2',titlesUpperCase);


//3 Usa la función filter para crear un nuevo array con todas las canciones lanzadas antes 
//de 1975.

/*La función filter() es otro método de los arrays en JavaScript que se utiliza para crear 
un nuevo array 
con todos los elementos que pasan una condición especificada por una función de prueba.
Esta función de prueba se aplica a cada elemento del array y devuelve true o false 
dependiendo de si el elemento cumple o no con la condición.

La sintaxis básica de filter() es la siguiente:

const newArray = array.filter((element, index, array) => {
  // Código para evaluar si el elemento cumple con la condición
  // Devuelve true si el elemento debe incluirse en el nuevo array, false en caso contrario
});

element: El elemento actual del array que está siendo evaluado.
index (opcional): La posición del elemento actual dentro del array.
array (opcional): El array sobre el que se está iterando.

Por ejemplo, si tienes un array de números y quieres filtrar solo los números mayores 
que 5, puedes hacerlo así:
const numbers = [1, 6, 2, 8, 3, 9, 5];
const filteredNumbers = numbers.filter(number => {
  return number > 5;
});

console.log(filteredNumbers); // Resultado: [6, 8, 9]
*/

//ejercicio modificado utilizando la simplificacion de sintaxis
const songsBefore1975 = songs.filter(({year}) => year < 1975); //filtro songs,
//hago la desconstruccion de {year} y le digo que este tiene que tener un valor inferior
//al que le doy
console.log('3',songsBefore1975);

/*4 Usa la destructuring para crear una variable 
que almacene el título de la primera canción en el array. */

//armo el array [] y dentro hago el destructuring {title:  nombre de variable}
//y lo igualo al modulo songs para obtener lo que quiero
//como es el primer objeto del array, no necesito ponerle la posicion especifica.
const [{ title: firstSongTitle }] = songs;
console.log('4',firstSongTitle);

//5 Usa la función find para obtener el objeto que representa la canción "Hotel California".

/*La función find() se utiliza para encontrar el primer elemento en un array que cumple 
con una condición especificada por una función de prueba. Esta función de prueba se aplica 
a cada elemento del array, y find() devuelve el primer elemento para el cual la función de 
prueba devuelve true, o undefined si ningún elemento cumple con la condición.

La sintaxis básica de find() es la siguiente:

const result = array.find((element, index, array) => {
  // Código para evaluar si el elemento cumple con la condición
  // Devuelve true si el elemento cumple con la condición, false en caso contrario
});

ejemplo, si tenemos un array de números y queremos encontrar el primer número mayor que 5, 
podemos hacerlo así:
const numbers = [1, 6, 2, 8, 3, 9, 5];
const result = numbers.find(number => {
  return number > 5;
});

console.log(result); // Resultado: 6*/

//ejercicio modificado con las simplificaciones de sintaxis aprendidas en clase, lo resolvi diferente a la resolusion de la clase pero funciona igual
const hotelCaliforniaSong = songs.find(({title}) => title === "Hotel California");
console.log('5',hotelCaliforniaSong);
  
//6 Usa el operador rest para crear una función que tome cualquier número de argumentos 
//y devuelva su suma. (Consejo: Usa reduce).
/* Los tres puntos (...) en JavaScript se conocen como el operador rest cuando 
se utilizan en la definición de funciones Lo que hace 
es reunir todos los argumentos pasados a la función en un solo array. 
Esto permite a una función aceptar cualquier número de argumentos.*/

const sumar = (...aniosLanzamiento) => {
  
  return aniosLanzamiento.reduce((sumaAcumulada, anio) => {
    return sumaAcumulada + anio;
  }, 0);
};

// agarro los años de lanzamiento de cada canción en el array
const aniosLanzamiento = songs.map(song => song.year);

// Calculo la suma de los años utilizando la función sumar
const sumaAnios = sumar(...aniosLanzamiento);
console.log('6',sumaAnios); // Resultado: 19864 (suma de todos los años de lanzamiento)

//7
// Utilizar map y literales de plantilla para crear un nuevo array con el formato "Título - Artista (Año)"
/*Las literales de plantilla, también conocidas como "template literals" en inglés, 
son una característica introducida en ECMAScript 6 (ES6) que nos permite construir cadenas 
de texto de una manera más flexible y legible. Se representan utilizando comillas invertidas
(``) en lugar de comillas simples o dobles.
. `${}` se utiliza para insertar expresiones JavaScript dentro de una cadena de texto.
Cuando utilizas ${}, lo que está dentro de las llaves se evalúa como una expresión 
JavaScript y se convierte en una cadena de texto que se concatena con el resto de la cadena
literal.*/

const cancionesFormateadas = songs.map(song => `${song.title} - ${song.artist} (${song.year})`);//busca dentro del array el titulo el artista y el anio y como esta dentro de comillas invertidas lo trasforma en un string
console.log('7',cancionesFormateadas);

//8 Usa la destructuración y la función filter para crear un nuevo array con 
//los títulos de todas las canciones de The Beatles.

// Utilizo la destructuración ({}) y la función filter para obtener los títulos de las canciones de The Beatles
const cancionesTheBeatles = songs.filter(({ artist }) => artist === 'The Beatles').map(({ title }) => title);
console.log('8',cancionesTheBeatles); 


//9. Use arrow functions and the reduce function to calculate the total number of years 
//between all the songs' release dates. (Tip: Use reduce)


const totalYears = songs.reduce((acc, curr) => acc + curr.year,0);
console.log('9', totalYears);

//10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

import { averageYear } from "./utils.js";
const avgYear = averageYear(songs);

console.log("10", avgYear);

//11. Use the find function to get the object representing the song with the longest title.

const longestTitleSong = songs.find(
  (song) =>
    song.title.length === Math.max(...songs.map(({ title }) => title.length))
);

console.log("11", longestTitleSong);

//12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

const { title, artist, year } = songs[0];
console.log("12", `${title} by ${artist} was relased in ${year}`);

//13. Use the rest operator to create a new array without the first element.
const [, ...ramainingSongs] = songs;
console.log("13", ramainingSongs);

//14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.


//const loveSongs = filter(songs, ({ title }) => title.includes("Let"));
//console.log("14", loveSongs); no me funciona

//15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

const allTitlesAreLong = songs.every(({ title }) => title.length >= 5);
console.log("15", allTitlesAreLong);

//16. Use the some() method to check if there are any songs from the 80s.

const hasEightes = songs.some(({ year }) => year >= 1980 && year < 1990);
console.log("16", hasEightes);

//17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const letItBe = songs.find(({ title }) => title === "Let It Be");
const releaseString = `${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`;

console.log("17", releaseString);

//18. Use the map() method to create a new array with just the artist names.

const artistsNames = songs.map(({ artist }) => artist);
console.log("18", artistsNames);

//19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

const randomSong = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log("19", randomSong(songs));
console.log("19", randomSong(songs));
console.log("19", randomSong(songs));

//20. Sumar todos los años de las canciones de los 80s

const eigthyYearsSongs = songs
  .filter(({ year }) => year >= 1980 && year < 1990)
  .reduce((acc, curr) => acc + curr.year, 0);

console.log("20", eigthyYearsSongs);

/*
Map => Devuelve un array transformado
Filter => Devuelve un array con los objetos filtrados
Find => Devuelve un objeto (El primero que cumpla con la condicion
Reduce => Devuelve un numero (la sumatoria, promedio, etc)
*/


//Generar una canción tomando un artista random, un año random y un titulo random.

console.log('21', randomSong(songs).artist, randomSong(songs).title, randomSong(songs).year)







