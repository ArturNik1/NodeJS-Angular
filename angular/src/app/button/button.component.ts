import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() action: string = '';
  @Input() info = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private submitService: SubmitService) {}

  onClick(action: string = '', info = {email: '', password: '', confirmPassword: ''}) {
    if (action == 'register') {
      if (info.password != info.confirmPassword) {
        this.submitService.messageChanged.emit('Password does not match');
        return;
      }
      this.onRegister(info);
    }
    else if (action == 'login') {
      this.onLogin(info);
    }
  }

  onRegister(info = {email: '', password: '', confirmPassword: ''}) {
    console.log(info);
    this.submitService.addUser(info.email, info.password);
  }

  onLogin(info = {email: '', password: '', confirmPassword: ''}) {
    console.log(info);
    this.submitService.login(info.email, info.password);
  }
}
