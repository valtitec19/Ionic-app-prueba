import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  imageData: string;
  constructor(
    private camera: Camera,
    private feedbackSvc: FeedbackService
  ) { }



  ngOnInit() {
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageData = 'data:image/jpeg;base64,' + imageData;
    }, err => {
      console.log(err);
      this.feedbackSvc.showMessage("Error al intentar usar la camara");

    });
  }

}
