import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera calculadora en Angular';

  Numero_1:number = 0;
  Numero_2:number = 0;
  Resultado:number = 0;

  //Metodos para utlizar la calculadora
  Sumar():void{
    this.Resultado = this.Numero_1 + this.Numero_2;
  }
  Restar():void{
    this.Resultado = this.Numero_1 - this.Numero_2;
  }
  Multiplicacion():void{
    this.Resultado = this.Numero_1 * this.Numero_2;
  }
  Division():void{
    this.Resultado = this.Numero_1 / this.Numero_2;
  }
}
