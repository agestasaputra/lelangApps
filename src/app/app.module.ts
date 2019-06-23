import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component'

import { LelangService } from './lelang.service';
import { TableComponent } from './table/table.component'

import { HttpClientModule } from '@angular/common/http';
import { ModalAddComponent } from './modal-add/modal-add.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    ModalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [LelangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
