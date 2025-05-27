import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importa el ChatPage
import { ChatPage } from './chat/chat.page';  // Ajusta la ruta si es necesario

import { FormsModule } from '@angular/forms'; // IMPORTANTE para [(ngModel)]

@NgModule({
  declarations: [AppComponent, ChatPage],  // Declara ChatPage aquí
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule  // Asegúrate de importar FormsModule para ngModel
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
