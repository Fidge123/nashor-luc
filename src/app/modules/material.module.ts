import { MdButtonModule, MdCheckboxModule, MdToolbarModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
