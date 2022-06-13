import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArgentinaProgramaIconoComponent } from './components/argentina-programa-icono/argentina-programa-icono.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArgentinaProgramaIconoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
