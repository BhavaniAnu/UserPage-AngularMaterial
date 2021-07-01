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

  constructor(private router: Router, private storageService: StorageService) {
    this.isEmail = this.storageService.get('userEmail');
  }

  ngOnInit() {
   
  }

  logOut() {
    this.storageService.clear('userEmail');
    this.router.navigate(['/login']);
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}