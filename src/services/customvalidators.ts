/**
 * Created by Administrador on 24/02/2017.
 */
import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";

@Injectable()
export class CustomValidators{
    cedulaValidator(control: FormControl): {[s: string]:boolean}{
    if (!control.value.match(/[^A-Za-z]/)) {
        return {cedulaInvalida: true};
    }
}
}