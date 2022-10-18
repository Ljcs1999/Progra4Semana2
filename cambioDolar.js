//node cambioDolar.js --cantidad=1000 --tasa=24.78 --tipo=false
//false -> de lps a dolares
//true -> de dolares a lps
//console.log(valorResultante)

//console.log(process.argv)
const [,,parametro1,parametro2,parametro3]=process.argv

const [,cantidad] = parametro1.split('=')
const [,tasa] = parametro2.split('=')
let [,tipo] = parametro3.split('=')
tipo = (tipo === "true")
console.log(tipo)

//if(tipo === true){
let valorResultante = tipo ? cantidad*tasa : cantidad/tasa

console.log(`El cambio es: ${valorResultante} ${tipo? 'lps':'$'}`);

