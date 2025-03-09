import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      console.log('Intentando iniciar sesión con Firebase...');
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso:', result);
      return result;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }

  async register(email: string, password: string) {
    try {
      console.log('Intentando registrar usuario con Firebase...');
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Registro exitoso:', result);
      return result;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  }
}