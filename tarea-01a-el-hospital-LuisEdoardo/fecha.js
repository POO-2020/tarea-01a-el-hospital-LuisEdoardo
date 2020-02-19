export default class Fecha{
/**
 * @param {number} dia
 * @param {number} mes
 * @param {number} año
 */
constructor(dia, mes , año){
    this.fecha = new Date(dia, mes -1, año)
}

getAños(){
    let años = new Date(Date.now())

}

}
