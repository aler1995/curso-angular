import { Component } from '@angular/core';

@Component({
    selector: 'fruta', 
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Pera, y Sandia';
    public nombre:string = 'Aler Alecsandravichus';
    public edad:number;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<any>;
    comodin:any;

    constructor(){
        this.nombre = 'Aler Alecsnadravichus';
        this.edad = 23;
        this.mayorDeEdad = true;
        this.trabajos = ['Carpintero', 'Albañil', 'Fontanero', true, 2];
        this.comodin = 'Esta propiedad puede llevar cualqueir cosa'; 
        
    }
    /* Primer componente que se ejecuta luego del constructor*/
    ngOnInit(){
        this.cambiarNombre(this.nombre);
        this.cambiarEdad(48);
        console.log('Hola ' + this.nombre + " tienes " + this.edad);

        // variables y alcance
        var uno = 8;
        var dos = 15;

        if (uno == 8){
            let uno = 3;
            var dos = 88;
            console.log('Dentro del if ' + uno);
        }
        console.log('Fuera del if ' + uno);

    }

    cambiarNombre(nombre){
        this.nombre = 'Juan Lopez';        
    }

    cambiarEdad(edad){
        this.edad = edad;        
    }
}