import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule as PrimeInputTextModule } from 'primeng/inputtext';
import { KeyFilterModule as PrimeKeyFilterModule } from 'primeng/keyfilter';

import { InputComponent } from './input.component';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeInputTextModule,
    PrimeKeyFilterModule,
  ],
  providers: [FormGroupDirective, ControlAdapter],
})
export class InputModule {}
