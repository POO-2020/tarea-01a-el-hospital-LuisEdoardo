export default class tiempo{
    /**
     * @param {number} hora
     * @param {number} minutos
     * @param {number} periodo
     */
    constructor(hora, minutos, periodo){
        let h24 = new  Date()
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo
        this.h24M = h24M.getMinutes()
        this.h24H = h24H.getHours()
    }
    getFormato24(){
        return `${this.h24H} ${this.h24M}`

    }
}