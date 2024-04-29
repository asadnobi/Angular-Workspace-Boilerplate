import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';
import { IFieldConfig } from '@libs/ui-kits/src/lib/dynamic-form/dynamic-form.interface';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input({ required: true }) field!: IFieldConfig;
  @Input({ required: true }) controlUpdate!: boolean;
  public form!: FormGroup;
  public control!: FormControl;

  constructor(
    private controlAdapter: ControlAdapter,
    private formgroupDirective: FormGroupDirective,
  ) {}

  ngOnInit(): void {
    if (this.field.name) {
      this.form = this.formgroupDirective.control;
      this.control = this.form.get(this.field.name) as FormControl;
    }
  }

  public get errorMessage(): string | null {
    return this.controlAdapter.errorMsg(this.control);
  }
  public get class(): string | null {
    return this.controlAdapter.class(this.field.size, this.control);
  }
}
