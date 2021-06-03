import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee.model';
import { Subscription, Observable } from 'rxjs';

const names = ['Orlando', 'Aldair', 'Monica', 'Adela'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  listaUno: EmployeeData[] = [];
  listaDos: EmployeeData[] = [];
  value: number;
  value2$: Observable<number>;
  sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    // desde aquí no se hace la subscripción esto se hace desde el html com el pipe
    this.value2$ = this.generatorService.getData();
  }

  ngOnInit(): void {
    this.listaUno = this.generatorService.generate(names, [10, 20], 10);
    this.listaDos = this.generatorService.generate(names, [10, 20], 10);

    this.sub$ = this.generatorService.getData()
      .subscribe(value => {
        this.value = value;
        console.log(this.value);
      });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }
}
