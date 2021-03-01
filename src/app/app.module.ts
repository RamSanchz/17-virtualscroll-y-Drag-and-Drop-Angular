import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Virtual Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';

// Drag and Drop
import { DragDropModule } from '@angular/cdk/drag-drop';

// HTTP Servicios Rest
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent,
  ],
  imports: [BrowserModule, ScrollingModule, DragDropModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
