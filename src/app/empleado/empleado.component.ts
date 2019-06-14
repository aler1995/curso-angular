import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public title = 'Componente empleados: ';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true)
        this.trabajadores = [
            new Empleado('Manolo Martinez', 35, 'Administrativo', false),
            new Empleado('Ana Lopez', 45, 'Cocinero', true),
            new Empleado('Victor Robles', 66, 'Programador', false)
        ];
        this.trabajador_externo = false;
        this.color="red";
        this.color_seleccionado='#ccc';
    }


    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
        console.log(this.trabajadores[1]);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}