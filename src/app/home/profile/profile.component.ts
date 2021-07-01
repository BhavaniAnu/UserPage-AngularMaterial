import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() emailDetails: IUser[];
  @Output() valueChange = new EventEmitter();

  editForm: FormGroup;
  updatedEmail: IUser[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initEditForm();
  }
  
  get f() { return this.editForm.controls; }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{11}")]],
      email: [this.emailDetails, [Validators.required, Validators.email]]
    });
  }

  resetForm() {
    this.editForm.controls.name.reset("");
    this.editForm.controls.phone.reset("");
  }

  onSubmit() {
    this.updatedEmail = this.editForm.value.email;
    console.log(this.updatedEmail);
    this.valueChange.emit(this.updatedEmail);
    this.resetForm();
  }
}
