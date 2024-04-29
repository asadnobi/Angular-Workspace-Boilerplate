import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule as PrimeDropdownModule } from 'primeng/dropdown';

import { DropdownComponent } from './dropdown.component';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeDropdownModule,
  ],
  providers: [FormGroupDirective, ControlAdapter],
})
export class DropdownModule {}
