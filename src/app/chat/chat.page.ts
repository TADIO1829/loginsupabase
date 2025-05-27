import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../supabase.client';
import { supabase } from '../supabase.client'; // Asegúrate de que esta ruta sea correcta
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,

  imports: [IonicModule, FormsModule,CommonModule,RouterModule],
})
export class ChatPage implements OnInit, OnDestroy {
  messages: any[] = [];
  newMessage: string = '';
  chatSubscription: any;

  senderId = '';
  receiverId = 'user-id-2'; // este puedes dejarlo estático o dinámico

  senderEmail = '';

  constructor(private chatService: ChatService) {}

  async ngOnInit() {
    // Obtener el usuario logueado
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      this.senderId = user.id;
      this.senderEmail = user.email!;
    }

    this.loadMessages();
    this.chatSubscription = this.chatService.subscribeToMessages((message) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

  loadMessages() {
    this.chatService.getMessages().then((response) => {
      this.messages = response;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    this.chatService
      .sendMessage(this.senderId, this.receiverId, this.newMessage, this.senderEmail)
      .then(() => {
        this.newMessage = '';
      });
  }
}