import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ControlAdapter {
  public class(size?: string, control?: FormControl): string | null {
    const classList: string[] = [];
    if (size == 'small') classList.push('p-1');
    if (size == 'large') classList.push('p-3');
    if (control?.touched) classList.push('ng-dirty');
    if (!control?.touched) classList.filter(f => f !== 'ng-dirty');
    if (control?.invalid) classList.push('ng-invalid');
    if (!control?.invalid) classList.filter(f => f !== 'ng-invalid');
    return [...new Set(classList)].join(' ');
  }

  public errorMsg(control?: FormControl): string | null {
    if (!control) return null;
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('min')) {
      const minError = control.getError('min');
      return `Minimum value is ${minError?.min}`;
    }
    if (control.hasError('max')) {
      const maxError = control.getError('max');
      return `Maximum value is ${maxError?.max}`;
    }
    if (control.hasError('minlength')) {
      const minLengthError = control.getError('minlength');
      return `Minimum length is ${minLengthError?.requiredLength}`;
    }
    if (control.hasError('maxlength')) {
      const maxLengthError = control.getError('maxlength');
      return `Maximum length is ${maxLengthError?.requiredLength}`;
    }
    if (control.hasError('pattern')) {
      return 'Invalid format';
    }
    // Custom error handling
    if (control.hasError('customError')) {
      return 'Custom error message';
    }
    // If no specific error found, return a generic message
    return 'Validation error';
  }
}
