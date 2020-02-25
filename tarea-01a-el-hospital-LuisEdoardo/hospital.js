import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital1 from "./hospitales.js"
class Hospital{
    constructor(dia,mes,año){
        this.fecha = new Date(año,mes -1,dia)
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']

    }
probarNombres(){
    console.log('<--------------------Nombres---------------------->')
    let nombrePaciente = new Nombre('Luis Edoardo', 'Morales', 'Leyva')
    console.log(nombrePaciente.getNombreCompleto())
    console.log(nombrePaciente.getApellidoNombre())
    console.log(nombrePaciente.getIniciales())

}
probarTiempo(){
console.log('<--------------------Tiempo---------------------->')
let h = new Tiempo(17,25,"AM")
console.log(h.getFormato24())
console.log(h.getFormato12())
}

probarFecha(){
    console.log('<--------------------Fecha---------------------->')
    let fecha = new Fecha(1,2,2000)
    console.log(`El día fue ${fecha.getDiaFecha()}`);
    console.log(`Han pasado ${fecha.getAños()} Años`)
    console.log(`Han pasado ${fecha.getMeses()} Meses`);
    console.log(`Han pasado ${fecha.getSemanas()} Semanas`);
    console.log(`Han pasado ${fecha.getDias()} Días`);
}

probarPaciente(){
    console.log('<--------------------Paciente---------------------->')
    let fecha = new Fecha(1, 2, 2000)
    let nombrePaciente = new Nombre('Rodolfo Alar', 'Serrano', 'Elias')
    let paciente = new Paciente(nombrePaciente.getNombreCompleto(), fecha.getFecha(), 3121890989)
    console.log(`${paciente.getPerfil()}`)
}

probarDoctor(){
    console.log('<--------------------Doctor---------------------->')
    let nombreDoctor = new Nombre('José Carlos', 'Barboza', 'Mendez')
    let doctor = new Doctor(56784321, nombreDoctor.getNombreCompleto(), 'Pediatra', 3126783452)
    console.log(`${doctor.getPerfil()}`)
}
probarCita(){
    console.log('<--------------------Cita---------------------->')
    let nombrePaciente = new Nombre('Alvaro', 'Morales', 'Leyva')
    let fechaPaciente = new Fecha(24, 3, 2001)
    let paciente = new Paciente(nombrePaciente.getNombreCompleto(), fechaPaciente.getFecha(), 3129027892)
    let doctor = new Nombre('Carolina', 'Leyva', 'Tirado')
    let fecha = new Fecha(25, 2, 2020)
    let tiempo = new Tiempo(9,36, 'am')
    let cita = new Cita(fecha.getFecha(),tiempo.getFormato12(),doctor.getNombreCompleto(),paciente.getPerfil())
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