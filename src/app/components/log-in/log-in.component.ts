import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatIcon],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  // variable declaration
  loginForm: FormGroup = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

 login() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
  } else {
    console.log('Form is invalid');
  }
}

}
