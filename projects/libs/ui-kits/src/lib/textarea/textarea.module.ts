import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextareaModule as PrimeInputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule as PrimeKeyFilterModule } from 'primeng/keyfilter';

import { TextareaComponent } from './textarea.component';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeInputTextareaModule,
    PrimeKeyFilterModule,
  ],
  providers: [FormGroupDirective, ControlAdapter],
})
export class TextareaModule {}
