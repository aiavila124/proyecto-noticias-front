import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name1 = '';
  disabled = false;
  mensaje = 'No se ha agregado ninguna persona';
  nombre = '';
  apellido = 'Apellido';

  checkDisabled() {
    if (this.mensaje == "Persona agregada"){
      this.disabled = true;
    }
  }

  agregarPersona() {
    this.mensaje = "Persona agregada";
  }

  modificarNombre(event:Event){
    this.nombre = (<HTMLInputElement>event.target).value; // Para obtener el valor del objeto html
    console.log("Evento:", this.nombre);
  }

}
