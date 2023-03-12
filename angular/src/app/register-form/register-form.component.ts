import { Component } from '@angular/core';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  message: string = '';

  formData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private submitService: SubmitService) {
    this.submitService.messageChanged.subscribe(message => {
      this.message = message;
    })
  }

}
