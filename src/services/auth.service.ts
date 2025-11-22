import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router: Router;
  isAuthenticated = signal<boolean>(false);

  constructor() {
    // FIX: Moved inject(Router) call into the constructor to resolve a potential type inference issue with field initializers.
    this.router = inject(Router);
    if (typeof window !== 'undefined') {
      const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      this.isAuthenticated.set(loggedIn);
    }
  }

  login(email: string, password: string):boolean {
    if (email === 'ikram.knit@gmil.com' && password === 'Ikram@123') {
      this.isAuthenticated.set(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/admin']);
  }
}
