import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.services';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo = 'Pagina principal';
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;
    
    public fecha;
    public nombre = "JUAN Lopez Martinez";
    
    constructor(
        private _ropaService: RopaService,
    ){
        this.fecha = new Date(2017, 4, 15);
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardar_prenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminar_prenda(indice:number){
        this._ropaService.delete_ropa(indice);
    }
}

