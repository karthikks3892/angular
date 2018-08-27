import { AbstractControl, ValidationErrors } from '../../../node_modules/@angular/forms';

export class UserNameValidators {

    static containNoSpaces(control: AbstractControl): ValidationErrors | null {
        // tslint:disable-next-line:curly
        if ((control.value as string).indexOf(' ') >= 0)
            return { containNoSpaces: true };

        return null;

    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'karthik') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }

            }, 2000);
        });
    }
}
