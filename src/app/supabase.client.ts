import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

const supabaseUrl = "https://imnnjgfzwgdzuvjuvjyz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltbm5qZ2Z6d2dkenV2anV2anl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTc1NjAsImV4cCI6MjA2Mzg3MzU2MH0.TbHCEdtPz3tw88qOChQJSlBfLVLSsjc5Ck2Vuw95Xz4";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private channel: any;

  constructor() {}

  // Obtener mensajes existentes
  async getMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data;
  }

  // Enviar mensaje nuevo
 async sendMessage(senderId: string, receiverId: string, message: string, senderEmail: string) {
  const { error } = await supabase.from('messages').insert([
    {
      sender_id: senderId,
      receiver_id: receiverId,
      sender_email: senderEmail,
      message: message,
      created_at: new Date().toISOString(),
    },
  ]);
  if (error) throw error;
}


  // Suscribirse a nuevos mensajes en tiempo real
  subscribeToMessages(callback: (message: any) => void) {
    this.channel = supabase
      .channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload: RealtimePostgresChangesPayload<any>) => {
          callback(payload.new);
        }
      )
      .subscribe();

    return {
      unsubscribe: () => {
        if (this.channel) {
          supabase.removeChannel(this.channel);
        }
      },
    };
  }
}
