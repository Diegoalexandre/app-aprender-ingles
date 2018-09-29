import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TentativasComponent } from './tentativas/tentativas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TentativasComponent],
  exports: [TentativasComponent]
})
export class SharedModule { }
