import Nombres from "./nombres.js"
import Fecha from "./fecha.js"
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
    
}
let app = new Hospital

app.probarNombres()