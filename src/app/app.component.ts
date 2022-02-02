import { Component } from '@angular/core';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loading = false;

  constructor(private feedbackSvc: FeedbackService) {
    this.feedbackSvc.loading.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }
}
