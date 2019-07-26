class Transporte {


    private speed :number;
    private formaDeMovilidad:string;


    constructor(speed: number , formaDeMovilidad:string ){
        this.speed=speed;
        this.formaDeMovilidad=formaDeMovilidad;

    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    getFormaDeMovilidad(): string {
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad: string) {
        this.formaDeMovilidad = formaDeMovilidad;
    }


}
const  transporte: Transporte = new  Transporte(20,'suelo');

class Auto extends Transporte {

    private cantidadDePuertas:number ;

    constructor(speed: number , formaDeMovilidad:string , cantidadDePuertas: number){

        super(speed,formaDeMovilidad);
        this.cantidadDePuertas=cantidadDePuertas;


    }

    getSpeed() {
        return super.getSpeed()+10;
    }

    getCantidaDePuertas(){
        return this.cantidadDePuertas;

    }

   setCantidadDePuertas(cantidadDePuertas :number){
        this.cantidadDePuertas=cantidadDePuertas
   }
}
;
const auto: Auto = new Auto(20,'suelo',4)









