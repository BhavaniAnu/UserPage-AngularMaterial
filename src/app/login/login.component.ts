import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.isEmail = this.storageService.get('userEmail');
    if(this.isEmail !== null ) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

  userLogin(form) {
    this.storageService.set('userEmail', form.value.email);
    this.router.navigate(['/home']);
  }

}
