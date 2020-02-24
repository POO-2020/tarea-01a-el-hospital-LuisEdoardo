import Nombres from "./nombres.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospitales.js"
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
    let fecha = new Fecha(1,2,2000)
    console.log(`El día fue ${fecha.getDiaFecha()}`);
    console.log(`Han pasado ${fecha.getAños()} Años`)
    console.log(`Han pasado ${fecha.getMeses()} Meses`);
    console.log(`Han pasado ${fecha.getSemanas()} Semanas`);
    console.log(`Han pasado ${fecha.getDias()} Días`);
}

probarPaciente(){
    let fecha = new Fecha(1, 2, 2000)
    let nombres = new Nombres('Rodolfo Alar', 'Serrano', 'Elias')
    let paciente = new Paciente(nombres.getNombreCompleto(), fecha.getFecha(), 3121890989)
    console.log(`${paciente.getPerfil()}`)
}

probarDoctor(){
    let nombres = new Nombres('José Carlos', 'Barboza', 'Mendez')
    let doctor = new Doctor(nombres.getNombreCompleto(), 56784321, 'Pediatra', 3126783452)
    console.log(`${doctor.getPerfil()}`)
}
probarCita(){
    let nombres = new Nombres('Alvaro', 'Morales', 'Leyva')
    let doctor = new Nombres('Carolina', 'Leyva', 'Tirado')
    let fecha = new Fecha(25, 2, 2020)
    let tiempo = new Tiempo(9,36, 'am')
    let cita = new Cita(`${fecha.getFecha()}, ${tiempo.getFormato12()}, ${doctor.getNombreCompleto()}, ${nombres.getNombreCompleto()}`)
    console.log(`${cita.getPerfil()}`)
}

}
let app = new Hospital

app.probarNombres()
app.probarTiempo()
app.probarFecha()
app.probarPaciente()
app.probarDoctor()
app.probarCita()