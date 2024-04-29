import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MultiSelectModule as PrimeMultiSelectModule } from 'primeng/multiselect';
import { MultiSelectComponent } from './multi-select.component';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';

@NgModule({
  declarations: [MultiSelectComponent],
  exports: [MultiSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeMultiSelectModule,
  ],
  providers: [FormGroupDirective, ControlAdapter],
})
export class MultiSelectModule {}
