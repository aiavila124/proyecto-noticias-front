import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Persona } from './login.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name1 = '';
  disabled = false;
  mensaje = 'No se ha agregado ninguna persona';
  nombre = '';
  apellido = 'Apellido';
  num1 = 0;
  num2 = 0;
  result: number = 0;
  mostrar = true;

  sumar(): void {
    this.result = this.num1 + this.num2;
  }

  checkDisabled() {
    if (this.mensaje == "Persona agregada"){
      this.disabled = true;
    }
  }

  agregarPersona() {
    this.mensaje = "Persona agregada";
    this.mostrar = false;
  }

  modificarNombre(event:Event){
    this.nombre = (<HTMLInputElement>event.target).value; // Para obtener el valor del objeto html
    console.log("Evento:", this.nombre);
  }

  nombreInput: string = '';
  apellidoInput: string = '';

  personas: Persona[] = [];

  agregarPersona2() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
    console.log(this.personas);

  }


}
