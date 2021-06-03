import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { Demo2RoutingModule} from './demo2-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { List2Component } from './components/list/list2.component';

@NgModule({
  declarations: [
    LayoutComponent,
    List2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    Demo2RoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class Demo2Module { }
