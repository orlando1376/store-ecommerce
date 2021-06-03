import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from '@core/models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // detecta a que componente se hizo el cambio únicamente
})
export class List2Component implements OnInit {

  @Input() title: string;
  @Input() data: EmployeeData[] = [];
  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.add.emit(this.label);
    this.label = '';
  }

}
