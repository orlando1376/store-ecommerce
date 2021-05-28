import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { GroupbyPipe } from './pipes/groupby/groupby.pipe';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '@material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    ExponentialPipe,
    GroupbyPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    ExponentialPipe,
    GroupbyPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ]
})
export class SharedModule { }
