export default class Doctor{
    /**
     * @param {string} cedula
     * @param {string} especialidad
     * @param {string} nombre
     * @param {number} telefono
     */
    constructor(cedula, especialidad, nombre, telefono){
        this.cedula = cedula
        this.especialidad = especialidad
        this.nombre = nombre
        this.telefono = telefono
    }
    getPerfil(){
        return `${this.nombre}\nCedula: ${this.cedula}\nEspecialidad: ${this.especialidad}\nTelefono: ${this.telefono}`
    }

}