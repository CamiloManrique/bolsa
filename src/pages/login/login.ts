import { Component } from '@angular/core';
import { ServiceUsers } from '../../providers/service-users';
import {FormGroup} from "../../../node_modules/@angular/forms/src/model";
import {FormBuilder} from "../../../node_modules/@angular/forms/src/form_builder";
import {Validators} from "../../../node_modules/@angular/forms/src/validators";
import {FormControl} from "../../../node_modules/@angular/forms/src/model";
import {NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {BienvenidaPage} from '../bienvenida/bienvenida';
import {HomePage} from '../home/home';
import 'rxjs/add/operator/catch';


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
            <ion-input type="number" [formControl]="formulario.controls['cedula']" required></ion-input>
          </ion-item>

        </ion-list>
        
        <p style="color:red" *ngIf="formulario.controls['cedula'].hasError('cedulaInvalida') && formulario.controls['cedula'].touched">Número de cedula no valido</p>

        <div padding>
          <button ion-button color="danger" block type="submit" [disabled]="!formulario.valid">Ingresar</button>
        </div>

      </form>
  `
})

export class LoginForm{
  formulario: FormGroup;
  data: any;
  docu: any;
  isActive: boolean;
  constructor(fb: FormBuilder,private userService:ServiceUsers,public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl:ToastController){
      this.formulario = fb.group({
      "cedula":["", Validators.compose([
          Validators.required, cedulaValidator ])
      ]
    })
  
  }

  onSubmit(value: any): void{

    //this.navCtrl.setRoot(HomePage);

    //Production Code
    
    this.userService.verifyUsers(value.cedula).then(data => {
        this.data = data;
        if(this.data[0] == null){
          this.userDontExist();
        }else{
          if(this.data[0].user_st == 1){
          this.userService.updateUserStatus(value.cedula);
          this.navCtrl.setRoot(BienvenidaPage);
          }else{
          this.navCtrl.setRoot(HomePage);
          }
        }
    }
    ).catch( error => {
      this.conexionFailure()
    });
  }

  conexionFailure() {
   let toast = this.toastCtrl.create({
      message: 'Error de conexión, por favor compruebe su conexión a internet.',
      duration: 3000
    });
    toast.present();
  }

  userDontExist() {
    let alert = this.alertCtrl.create({
      title: 'No estas registrado!',
      subTitle: 'Por favor registrate si deseas ganar mas puntos',
      buttons: ['OK']
    });
    alert.present(); 
  }
}

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor() {

  }
}
