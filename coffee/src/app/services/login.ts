import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private storageKey = 'usuarios';

  // Obtener todos los usuarios del LocalStorage
  getUsuarios(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Registrar un nuevo usuario
  register(user: User): { success: boolean; message: string } {
    const usuarios = this.getUsuarios();

    // Verificar si la cédula ya existe
    const cedulaExiste = usuarios.find(u => u.cedula === user.cedula);
    if (cedulaExiste) {
      return { success: false, message: 'Ya existe un usuario con esa cédula' };
    }

    // Verificar si el email ya existe
    const emailExiste = usuarios.find(u => u.email === user.email);
    if (emailExiste) {
      return { success: false, message: 'Ya existe un usuario con ese correo' };
    }

    // Guardar el nuevo usuario
    usuarios.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
    return { success: true, message: 'Usuario registrado exitosamente' };
  }

  // Login: buscar por email y contraseña
  login(email: string, password: string): User | null {
    const usuarios = this.getUsuarios();
    const usuario = usuarios.find(
      u => u.email === email && u.password === password
    );
    return usuario || null;
  }

  // Guardar usuario logueado en sesión
  setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Obtener usuario logueado
  getCurrentUser(): User | null {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // Verificar si hay sesión activa
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}