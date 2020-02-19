export default class Fecha{
/**
 * @param {number} dia
 * @param {number} mes
 * @param {number} año
 */
constructor(dia,mes,año){
    this.fecha = new Date(año,mes -1,dia)
    this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']
}
getAños(){
    let añosR = new Date(Date.now() - this.fecha)
    var mAños = 1000 * 60 * 60 * 24 * 365
    let años = Math.trunc(añosR/mAños)
    return `${años}`

}

}
