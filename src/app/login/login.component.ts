import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  isEmail: any;

  constructor(private router: Router, private storageService: StorageService) {
    // this.isEmail = localStorage.getItem('userEmail');
    this.isEmail = this.storageService.get('userEmail');
    if(this.isEmail !== null) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

  userLogin(form) {
    console.log(form.value);
    this.storageService.set('userEmail', form.value.email);
    // localStorage.setItem('userEmail', form.value.email);
    this.router.navigate(['/home']);
  }

}
