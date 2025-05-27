import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';       // <-- para ngModel
import { IonicModule } from '@ionic/angular';      // <-- para ion-button, ion-input, etc.

import { ChatPage } from './chat.page';

@NgModule({
  declarations: [ChatPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class ChatPageModule {}
