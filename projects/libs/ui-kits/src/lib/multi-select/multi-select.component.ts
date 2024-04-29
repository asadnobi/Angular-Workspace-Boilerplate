import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlAdapter } from '@libs/utils/src/lib/adapters/form-control.adapter';
import {
  IFieldConfig,
  IFieldDropdownItem,
} from '@libs/ui-kits/src/lib/dynamic-form/dynamic-form.interface';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'ui-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input({ required: true }) field!: IFieldConfig;
  @Input({ required: true }) controlUpdate!: boolean;
  public display: 'chip' | 'comma' = 'chip';
  public form: FormGroup = new FormGroup({});
  public control: FormControl = new FormControl();
  public selectedItems!: IFieldDropdownItem[];

  constructor(
    private controlAdapter: ControlAdapter,
    private formgroupDirective: FormGroupDirective,
  ) {
    this.form = this.formgroupDirective.control;
  }

  ngOnInit(): void {
    this.control = this.form.get(this.field.name) as FormControl;
  }

  public get errorMessage(): string | null {
    return this.controlAdapter.errorMsg(this.control);
  }
  public get class(): string | null {
    return this.controlAdapter.class(this.field.size, this.control);
  }
}
