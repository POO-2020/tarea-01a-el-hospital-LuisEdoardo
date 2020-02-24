export default class Cita{
    /**
     * @param {string} fecha
     * @param {string} hora
     * @param {string} doctor
     * @param {string} nombre
     */
    constructor(fecha, hora, doctor, nombre){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.nombre = nombre
    }

    getPerfil(){
        return `Cita No. # ${Math.trunc((Math.random() * (100 - 0) + 0))}, ${this.fecha}, ${this.hora}, ${this.doctor}, ${this.nombre}`
    }
}