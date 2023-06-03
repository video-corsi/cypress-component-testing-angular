import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <button routerLink="home">home</button>
    <button routerLink="uikit">uikit</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
