import { NgModule } from '@angular/core';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from "@angular/material/button";
import {  MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";

import { AppComponent } from './app.component';
import { SetorComponent } from "./components/setor/setor.component";
import { AcaoComponent } from "./components/acao/acao.component";
import { CarteiraComponent } from "./components/carteira/carteira.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TableListComponent } from "./components/table-list/table-list.component";
import { AtivoComponent } from "./components/ativo/ativo.component";
import { TituloPublicoComponent } from "./components/titulo-publico/titulo-publico.component";
import {TipoAtivoPipe} from "./pipe/TipoAtivoPipe";
import {AporteComponent} from "./components/aporte/aporte.component";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatDialogClose} from "@angular/material/dialog";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SetorComponent,
    AcaoComponent,
    CarteiraComponent,
    DashboardComponent,
    TableListComponent,
    AtivoComponent,
    TituloPublicoComponent,
    AporteComponent,
    TipoAtivoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatCardModule,
    MatTooltipModule,
    MatOption,
    MatSelect,
    MatDialogClose
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    /* if you don't provide the currency symbol in the pipe,
      this is going to be the default symbol (R$) ... */
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }