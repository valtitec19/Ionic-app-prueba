import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login.model';
import { FeedbackService } from '../services/feedback.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private loginSvc: LoginService,
    private feedbackSvc:  FeedbackService,
    private router: Router) {

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.feedbackSvc.loading.subscribe(isLoading => {
      this.loading = isLoading;
    });

   }

  ngOnInit() {
  }

  login(): void{
    console.log("boton");

    const request  = this.formLogin.value as LoginRequest;
    this.feedbackSvc.loading.next(true);
    this.loginSvc.login(request).subscribe(response => {
      console.log(response);
      this.feedbackSvc.loading.next(false);
      this.router.navigate(['/home']);

    }, (error) => {
      this.feedbackSvc.showMessage(error.error.error);
      this.feedbackSvc.loading.next(false);
    });
  }

}
