import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "../../services/customvalidators";
import {Component} from "@angular/core";
/**
 * Created by Administrador on 24/02/2017.
 */

@Component({
    selector:'account-form',
    template:`
      <form [formGroup]="formulario" (ngSubmit)="onSubmit(formulario.value)">
        <ion-list>

          <ion-item>
            <ion-label> Nombre </ion-label>
            <ion-input input type="text" disabled [formControl]="formulario.controls['nombre']"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label floating>No. de Cédula</ion-label>
            <ion-input type="number" [formControl]="formulario.controls['cedula']" required></ion-input>
          </ion-item>

          <ion-item>
            <p style="color:red" *ngIf="formulario.controls['cedula'].hasError('cedulaInvalida') && formulario.controls['cedula'].touched">Número de cedula no valido</p>
          </ion-item>

        </ion-list>


        <div padding>
          <button ion-button color="danger" block type="submit" [disabled]="!formulario.valid">Guardar cambios</button>
        </div>

      </form>
  `,
    providers:[CustomValidators]
})

export class AccountForm {
    formulario:FormGroup;
    constructor(fb:FormBuilder, val:CustomValidators) {
        this.formulario = fb.group({
            "nombre": ["Camilo"],
            "cedula": ["", Validators.compose([
                Validators.required, val.cedulaValidator])
            ]
        })
    }

    onSubmit(value:any):void {

        console.log("Cambios guardados");

        //Production Code
        /*
         this.userService.verifyUsers(value.cedula).then(data => {
         this.data = data;

         if(this.data[0] == null){
         //console.log("No existe este usuario en la base de datos");
         this.userDontExist();
         }else{

         //this.docu = this.data[0].user_dc;

         if(this.data[0].user_st == 1){
         this.userService.updateUserStatus(value.cedula);
         this.navCtrl.setRoot(BienvenidaPage);
         }else{
         this.navCtrl.setRoot(HomePage);
         }
         }

         });*/
    }
}
