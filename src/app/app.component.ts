import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-game-container></app-game-container>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(to bottom right, #e6f7ff, #ffffff);
      padding: 2rem 1rem;
    }
  `]
})
export class AppComponent {
  title = 'password-game';
}