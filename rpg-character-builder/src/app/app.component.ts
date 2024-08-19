import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header>
      </header>
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="#">#</a></li>
            <li><a href="#">#</a></li>
            <li><a href="#">#</a></li>
            <li><a href="#">#</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a href="#">#</a> |
          <a href="#">#</a> | <a href="#">#</a> |
          <a href="#">#</a>
        </nav>
        <p>&copy; 2024 CharacterVerse</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {}
