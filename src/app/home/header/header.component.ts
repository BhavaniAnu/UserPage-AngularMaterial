import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isEmail: any;
  @Output() featureSelected = new EventEmitter<string>();
  url = '/login';

  constructor(private router: Router, private storageService: StorageService) {
    this.isEmail = this.storageService.get('userEmail');
    // this.isEmail = localStorage.getItem('userEmail');
  }

  ngOnInit() {
   
  }

  logOut() {
    console.log('log out');
    this.storageService.clear('userEmail');
    // localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}