import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ IonicModule], // Importa IonicModule aquí
  schemas: [CUSTOM_ELEMENTS_SCHEMA],     // Esto permite el uso de <ion-*>
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {}
