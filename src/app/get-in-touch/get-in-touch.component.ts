import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
})
export class GetInTouchComponent implements OnInit {
  getInTouchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.getInTouchForm = fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.getInTouchForm.value);
    // this.getInTouchForm.reset();
  }

  get name() {
    return this.getInTouchForm.get("name");
  }

  get email() {
    return this.getInTouchForm.get("email");
  }

  get message() {
    return this.getInTouchForm.get("message");
  }
}
