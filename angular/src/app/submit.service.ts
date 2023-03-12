import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  @Output() messageChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() messageChangedLogin: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient, private router: Router) { }

  rootURL: string = '/api';

  addUser(email: string, password: string) {
    console.log(email, password);
    return this.http.post(this.rootURL + '/user', {email, password}).subscribe(data => {
      if (data === "user exists") {
        this.messageChanged.emit('User already exists');
      }
      else if (data === "user added") {
        this.router.navigate(['/home']);
      }
      console.log(`message: ${data}`);
    });
  }

  login(email: string, password: string) {
    console.log(email, password);
    return this.http.post(this.rootURL + '/login', {email, password}).subscribe(data => {
      if (data === "user correct") {
        this.router.navigate(['/home']);
      }
      else if (data === "no user") {
        this.messageChangedLogin.emit('incorrect login');
      }

    });
  }
}
