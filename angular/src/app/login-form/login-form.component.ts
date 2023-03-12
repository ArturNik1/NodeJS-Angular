import { Component } from '@angular/core';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  message: string = '';

  formData = {
    email: '',
    password: ''
  };

  constructor(private submitService: SubmitService) {
    this.submitService.messageChangedLogin.subscribe(message => {
      this.message = message;
    })
  }

}
