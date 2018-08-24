import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService } from '../_services/chat.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public message;
  public messages;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages();

    this.chatService.messageList.subscribe(
      res => {
        this.messages = res;
      },
      error => {
        console.error(error);
      },
    );
  }

  ngOnDestroy() {
    this.chatService.messageList.unsubscribe();
  }

  sendMessage(form: NgForm) {
    this.chatService.sendMessage(form.value.message).subscribe(data => {
      // this.getMessageList();
      console.log(form);
      this.message = null;
      console.log('ddddd', this.message);
    });
  }

}
