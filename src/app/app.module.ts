import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './shared/tentativas/tentativas.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    TentativasComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
