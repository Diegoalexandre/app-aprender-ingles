import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, ProgressComponent],
  exports: [NavbarComponent, ProgressComponent],
})
export class CoreModule { }
