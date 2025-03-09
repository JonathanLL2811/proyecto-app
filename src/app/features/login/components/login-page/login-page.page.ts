import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonLabel, IonText } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonLabel, IonText, NgIf]
})
export class LoginPageComponent {
  email = '';
  password = '';
  error: string | null = null;

  constructor(private authService: AuthService) { }

  async onSubmit() {
    try {
      await this.authService.login(this.email, this.password);
      // Redirige a la página principal si el inicio de sesión es exitoso
    } catch (err: any) {
      this.error = err.message;
    }
  }
}