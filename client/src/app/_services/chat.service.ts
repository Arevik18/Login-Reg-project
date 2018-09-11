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
  message:string;

  constructor(private http: HttpClient) {
    this.socket = io(environment.webSocketUrl);
    this.socket.on('message-added', (message: Message) => {
      this.messageList.next(this.messageList.getValue().concat([message]));
    });
    this.socket.on('delete-message', (id) => {
      console.log(id, 'id from delete');
      this.messageList.next(this.messageList.getValue().filter(v => v._id !== id));
    });
    this.socket.on('edit-message', (data) => {
      console.log(data, 'data>>>>>>>');
      this.messageList.next(this.messageList.getValue().map(v => {
        if (data.id === v._id) {
           v.message = data.message;
        }
        return v;
      }));
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
        console.log(this.messageList);
      },
      error => {
        console.error(error);
      },
    );
  }
  delete(id) {
    return this.http.delete(environment.apiUrl + '/chat/' + id).subscribe();
  }

  editMessage(id, message) {
    console.log('message', message)
    return this.http.put(environment.apiUrl + '/chat/' + id, {message}).map(data => data);
    }
}
