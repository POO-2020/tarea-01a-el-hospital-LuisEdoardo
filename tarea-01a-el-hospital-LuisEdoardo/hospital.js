import Nombres from "./nombres.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
class Hospital{
    constructor(dia,mes,año){
        this.fecha = new Date(año,mes -1,dia)
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']

    }
probarNombres(){
    let nombres = new Nombres('Luis Edoardo', 'Morales', 'Leyva')
    console.log(nombres)
    console.log(nombres.getNombreCompleto())
    console.log(nombres.getApellidoNombre())
    console.log(nombres.getIniciales())

}
probarTiempo(){
let h = new Tiempo(17,25,"AM")
console.log(h.getFormato24())
console.log(h.getFormato12())
}

probarFecha(){
    let fecha = new Fecha(dia, mes, año)
    console.log(`${fecha.getAños()}`)
}
    
}
let app = new Hospital

app.probarNombres()
app.probarTiempo()
app.probarFecha()