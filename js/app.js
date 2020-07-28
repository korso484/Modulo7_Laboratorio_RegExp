const iban = 'ES6600190020961234567890';

////////////////////////////VALIDAR UN IBAN//////////////////////////

//CASO 1
/*const pattern = /^[A-Z]{2}\d{22}$/;

console.log(pattern.test(iban));

//CASO 2
const pattern1 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;

console.log(pattern1.test(iban));*/

//CASO 3
const pattern2 = /^([A-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

console.log(pattern2.test(iban));

console.log("El código del pais es: "+ iban.match(pattern2)[1]+ " y el dígito de control es " +iban.match(pattern2)[2] );

//////////////////////////VALIDAR MATRICULA DE COCHE//////////////////////////

//CASO 1

const coches = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

const pattern3 = /^(\d{4})(\s|-)?([A-Z]{3})$/;

coches.forEach(coche => {
    console.log("La expresión regular coincide con: " + coche + "?", pattern3.test(coche));
})

coches.forEach(coche => {
    console.log("La parte numérica es: " + coche.match(pattern3)[1] + " y la parte alfabética es: "+ coche.match(pattern3)[3]);
})

//////////////////////////EXTRAER IMAGENES DE UN FICHERO HTML//////////////////////////

//CASO 1

const url = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

const pattern4 = /<img.{0,}?src="(.*?)"/;

console.log(url.match(pattern4)[1]);

//CASO 2

const url1 = '<html><body><img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/><h1>ejemplo</h1><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></body></html>';

const pattern5 = /(<img.{0,}?src=")?(.*?)"/g;

console.log("Las url del texto dado son " + url1.match(pattern5)[1] + " y " + url1.match(pattern5)[3] );

//////////////////////////VALIDAR SINTAXIS TARJETA DE CREDITO//////////////////////////

const card = '5299 6400 0000 0000';

const pattern6 = /^([50|51|52|53|54|55]+\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;

console.log("Los dígitos de la tarjeta son: "+ card.match(pattern6)[1] + "," + card.match(pattern6)[3] + "," + card.match(pattern6)[5] + "," + card.match(pattern6)[7]);
