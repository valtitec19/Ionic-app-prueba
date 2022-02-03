import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { FeedbackService } from '../services/feedback.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private usersSvc: UserService,
    private feedbackSvc: FeedbackService
  ) {
    this.route.params.subscribe(parameters => {
      if(parameters.id){
        //Consume servicio
        this.loaadUser(parameters['id']);

      }
    });
  }

  ngOnInit() {
  }

  loaadUser(id: number){
    this.feedbackSvc.loading.next(true);
    this.usersSvc.getSigleUser(id).subscribe(response => {
      this.user = response.data;
      this.feedbackSvc.loading.next(false);
    }, () => {
      this.feedbackSvc.loading.next(false);
      this.feedbackSvc.showMessage("No se pudo cargar la informacion del usuario");
    });
  }

}
