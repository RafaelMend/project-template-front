import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModuleComponent
  ],
  declarations: [
    ModuleComponent
  ]
})
export class ModuleModule { }
