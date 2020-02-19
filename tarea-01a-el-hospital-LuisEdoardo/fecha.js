export default class Fecha{
constructor(dia, mes , año){
    this.fecha = new Date(dia, mes -1, año)
}

getAños(){
    let años = new Date(Date.now())

}

}
