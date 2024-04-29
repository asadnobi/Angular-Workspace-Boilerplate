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
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input({ required: true }) field!: IFieldConfig;
  @Input({ required: true }) controlUpdate!: boolean;
  public form: FormGroup = new FormGroup({});
  public control: FormControl = new FormControl();
  public selectedItem!: IFieldDropdownItem;

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
