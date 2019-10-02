import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;
  constructor(private profileService: GithubService) {

  }
  profileSearch() {
    this.profileService.profileUpdate(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.reposAccess().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
