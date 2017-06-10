import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MaterialModule} from "./material.module";
import { PoliticosFramesComponent } from './politicos-frames/politicos-frames.component';
import { FramesContainersComponent } from './frames-containers/frames-containers.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PoliticosFramesComponent,
    FramesContainersComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
