import { Component } from '@angular/core';
import {FormGroup} from "../../../node_modules/@angular/forms/src/model";
import {FormBuilder} from "../../../node_modules/@angular/forms/src/form_builder";
import {Validators} from "../../../node_modules/@angular/forms/src/validators";
import {FormControl} from "../../../node_modules/@angular/forms/src/model";

function cedulaValidator(control: FormControl): {[s: string]:boolean}{
  if (!control.value.match(/[^A-Za-z]/)) {
    return {cedulaInvalida: true};
  }
}

@Component({
  selector:'login-form',
  template:`
      <form [formGroup]="formulario" (ngSubmit)="onSubmit(formulario.value)">
        <ion-list>

          <ion-item>
            <ion-label floating>No. de Cédula</ion-label>
            <ion-input type="text" [formControl]="formulario.controls['cedula']" required></ion-input>
          </ion-item>

        </ion-list>

        <div padding>
          <p *ngIf="formulario.controls['cedula'].hasError('cedulaInvalida') && formulario.controls['cedula'].touched">Número de cedula no valido</p>
        </div>

        <div padding>
          <button ion-button color="secondary" block type="submit" [disabled]="!formulario.valid">Ingresar</button>
        </div>

      </form>
  `
})
export class LoginForm{
  formulario: FormGroup;

  constructor(fb: FormBuilder){
    this.formulario = fb.group({
      "cedula":["", Validators.compose([
          Validators.required, cedulaValidator ])
      ]
    })
  }

  onSubmit(value: any): void{
    console.log(`Se ha ingresado la cédula: `, value.cedula);
  }

}

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
}
