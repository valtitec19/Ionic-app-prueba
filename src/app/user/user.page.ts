import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
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
    private usersSvc: UserService
  ) {
    this.route.params.subscribe(parameters => {
      if(parameters.id){
        //Consume servicio
        this.usersSvc.getSigleUser(parameters['id']).subscribe(response => {
          this.user = response.data;
        });

      }
    });
  }

  ngOnInit() {
  }

}
