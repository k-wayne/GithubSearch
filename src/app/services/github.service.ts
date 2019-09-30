import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientid = '55906159767228560208';
  private clientsecret = '80b91175b387183acd2862a0caeb5f8d17d5625d';

  constructor(private http: HttpClient) {
    console.log('Hurray. You did it!');
    this.username = 'k-wayne';
  }

  getProfileInfo() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }
  getProfileRepos() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
