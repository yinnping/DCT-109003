import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  origBodyClass = '';

  ngOnInit(): void {
    this.origBodyClass = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: ['eplin@gmail.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required, Validators.minLength(6)]],
      isRemember: [true]
    });
  }

  ngOnDestroy(): void {
    document.body.className = this.origBodyClass;
  }

  doSummit(control: any) {
    // TODO: POST
  }

}
