import { Injectable } from '@angular/core';

import { ApiService } from '@app/config/api.service';
import { ReqSendMessage }  from '@app/request/req-send-message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private apiService: ApiService
  ) { }

  sendMessage(message: ReqSendMessage, onSuccess: (result: any) => void) {
    return this.apiService.post('/chat/v1/sendMessage', message, onSuccess);
  }
}
