import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    const open = !this.menuOpen();
    this.menuOpen.set(open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }
}
