let dispositivo = {
    nombre: "Gateway",
    nSerie: 1235456,
    valor: 1500,
    direccionIpv4: [192,168,10,5],
    estado: false,
    cambiarEstado: function(){
        this.estado= !this.estado,
        console.log(`Estado cambio: ${this.estado}`)
    }
}

dispositivo.valor=2500
console.log(dispositivo)

dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroSerie = dispositivo.nSerie
let nombreDispositivo = dispositivo.nombre
console.log(numeroSerie,nombreDispositivo)

let {nSerie,nombre} = dispositivo

console.log(nSerie,nombre);

let Equipo = {
    nombre: "Barcelona",
    golesaFavor: 1,
    golesEncontra: 3
}

let golesLocal = Equipo.golesaFavor;
let golesVisitantes = Equipo.golesEncontra;
console.log(golesLocal,golesVisitantes);

let{golesaFavor, golesEncontra} = Equipo;
console.log(golesaFavor,golesEncontra);

let loteria = [32,69,47,69];
console.log(loteria);

let [,,ganador]= loteria;
console.log(ganador);


