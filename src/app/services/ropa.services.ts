import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    public nombre_prenda  = 'Pantalones vaqueros';
    public colecciones_ropa = ['Pantalones blancos', 'Camiseta roja'];
    
    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        this.colecciones_ropa.push(nombre_prenda)
        return this.getRopa();
    }

    getRopa(){
        return this.colecciones_ropa;
    }

    delete_ropa(index:number):Array<string>{
        this.colecciones_ropa.splice(index, 1)
        return this.getRopa();
    }
    
} 