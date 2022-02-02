import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { FeedbackService } from '../services/feedback.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[] = [];
  constructor(
    private userSvc: UserService,
    private feedbackSvc: FeedbackService,
    private router: Router
    ) {
      this.feedbackSvc.loading.next(true);
      this.userSvc.getUsers().subscribe(response => {
        this.users = response.data;
        this.feedbackSvc.loading.next(false);
      }, () => {
        this.feedbackSvc.loading.next(false);
        this.feedbackSvc.showMessage("Algo salio mal :(");
      });
  }

  goToUser(id: number){
    this.router.navigate(['/user',id]);
  }

}
