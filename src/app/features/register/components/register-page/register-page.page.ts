import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonLabel, IonText } from '@ionic/angular/standalone';
import { NgClass,NgIf } from '@angular/common';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html', // Actualizado
  styleUrls: ['./register-page.page.scss'], // Actualizado
  standalone: true,
  imports: [ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonLabel, NgClass, IonText]
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      identityNumber: ['', [Validators.required, Validators.minLength(13), Validators.pattern(/^[0-9]+$/)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[0-9]+$/)]],
    });
  }

  ngOnInit() {}

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get identityNumber() { return this.registerForm.get('identityNumber'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      console.log(user);
      // Aquí puedes enviar los datos del usuario a tu servicio de registro
    }
  }
}