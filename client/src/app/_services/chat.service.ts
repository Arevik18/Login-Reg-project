import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Message} from '../_models/index';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  private socket;
  public messageList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
    this.socket = io(environment.webSocketUrl);
    this.socket.on('message-added', (message: Message) => {
      this.messageList.next(this.messageList.getValue().concat([message]));
    });
  }

  sendMessage(messageText) {
    return this.http.post(environment.apiUrl + '/chat/', {
      message: messageText
    });
  }

  getMessages() {
    return this.http.get(environment.apiUrl + '/chat/').subscribe(
      res => {
        this.messageList.next(res);
      },
      error => {
        console.error(error);
      },
    );
  }
}
