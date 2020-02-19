import Nombres from "./nombres"

class Hospital{
    constructor(){
        let fecha = new Fecha(17, 2, 2000)
        console.log(fecha.getAños())
    }
probarNombres(){
    let nombres = new Nombres
    console.log(nombres)
}
    
}
let app = new Hospital

app.probarNombres()