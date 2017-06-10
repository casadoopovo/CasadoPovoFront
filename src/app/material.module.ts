import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,

  ],
  exports: [MdToolbarModule,
    MdButtonModule,
    BrowserAnimationsModule],
})
export class MaterialModule {
}
