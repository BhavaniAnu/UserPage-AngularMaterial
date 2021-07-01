import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isEmail: any;
  newEmail: any;
  loadedFeature = 'profile';

  constructor(private router: Router, private storageService: StorageService) {
    this.isEmail = this.storageService.get('userEmail');
  }

  ngOnInit(): void {
  }

  displayEmail(updateEmail) {
    this.newEmail = updateEmail;
    this.storageService.set('userEmail', this.newEmail);
  }

  logOut() {
    this.storageService.clear('userEmail');
    this.router.navigate(['/login']);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
