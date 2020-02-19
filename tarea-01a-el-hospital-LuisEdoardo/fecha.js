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
    let años = new Date(Date.now())

}

}
