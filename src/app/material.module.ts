import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdChipsModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule
  ],
  exports: [MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdChipsModule
  ],
})
export class MaterialModule {
}
