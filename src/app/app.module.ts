import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MaterialModule} from "./material.module";
import { PoliticosFramesComponent } from './components/main-page/politicos-frames/politicos-frames.component';
import { FramesContainersComponent } from './components/main-page/frames-containers/frames-containers.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { VereadorPageComponent } from './components/vereador-page/vereador-page.component';
import {ServiceProvider} from "app/providers/Service.provider";
import {AdminGuard} from "./guards/AdminGuard";
import { VereadorDetalhesComponent } from './components/vereador-page/vereador-detalhes/vereador-detalhes.component';
import { VereadorPropositurasComponent } from './components/vereador-page/vereador-proposituras/vereador-proposituras.component';
import { PropositurasPageComponent } from './components/proposituras-page/proposituras-page.component';
import {Constants} from "./providers/Constants";
import {DataBase} from "./providers/DataBase";
import { BtnsPropositurasComponent } from './components/proposituras-page/btns-proposituras/btns-proposituras.component';
import { VereadorChartComponent } from './components/vereador-page/vereador-chart/vereador-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { PropositurasTabelasComponent } from './components/proposituras-page/proposituras-tabelas/proposituras-tabelas.component';
import { PropositurasDetalheComponent } from './components/proposituras-detalhe/proposituras-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PoliticosFramesComponent,
    FramesContainersComponent,
    MainPageComponent,
    VereadorPageComponent,
    VereadorDetalhesComponent,
    VereadorPropositurasComponent,
    PropositurasPageComponent,
    BtnsPropositurasComponent,
    VereadorChartComponent,
    GoogleChartComponent,
    PropositurasTabelasComponent,
    PropositurasDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    ServiceProvider,
    AdminGuard,
    Constants,
    DataBase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
