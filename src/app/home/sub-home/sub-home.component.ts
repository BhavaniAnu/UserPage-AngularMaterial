import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit {
  userDetails: IUser[];
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'username','email','phone','website','address', 'company' ];
  isAsync: boolean = false;
  userList: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getHttpData();
  }

  getHttpData() {
    this.dataService.userData()
      .subscribe(res => {
        this.userDetails = res;
        this.dataSource = this.userDetails;
        },
        (error) => {
          console.log(error)
        }
      )
  }

  onAsync() {
    this.isAsync = !this.isAsync;
    this.userList = this.dataService.userData();
  }


}
