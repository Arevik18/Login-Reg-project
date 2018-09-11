import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import {ChatService} from '../../_services/chat.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  modalBody: string;
  @ViewChild(ModalDirective) private modal: ModalDirective;
  private messages;
  public id;

  constructor(private chatService: ChatService) { }
  public showModal(id, message) {
    this.id = id;
    console.log( this.id);
    this.messages = message;
    if (message !== undefined) {
      this.modalBody = message;
      this.modal.show();
    }
    this.modal.show();
     }
  ngOnInit() {
  }
  public editMessage(id, editMessage: NgForm) {
    this.chatService.editMessage(id, editMessage.value.message)
      .subscribe(val => {
        console.log(val);
      });
    console.log('edited', editMessage.value.message);
    this.modal.hide();
  }

}
