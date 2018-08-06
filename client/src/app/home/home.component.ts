import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: any;
  users ;
     user;


    constructor(private userService: UserService) {
        this.currentUser = localStorage.getItem('currentUser');
    }

    ngOnInit() {
        this.loadAllUsers();
      // this.loadOneUser();
    }

    deleteUser(_id: number) {
            this.userService.delete(_id).subscribe(() => { this.loadAllUsers()});
    }
  private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
          console.log(users);
          this.users = users;
        });
  }

/* private loadOneUser(id: number) {
   this.userService.getOne(id).subscribe(user => {
     this.user = user;
      console.log(this.user);
   });
  }*/
}
