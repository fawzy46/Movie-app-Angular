import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmPasswordValidatorDirective,
    multi: true
  }]
})
export class ConfirmPasswordValidatorDirective implements Validator {

  constructor() { }
  @Input() appConfirmPasswordValidator!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    const passwordcompare = control.parent?.get(this.appConfirmPasswordValidator);
    if(passwordcompare && passwordcompare.value !== control.value) {
      return {'PasswordnotMatch' : true};
    }
    
    return null;
  }

}
