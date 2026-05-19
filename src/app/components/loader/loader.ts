import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="loader-overlay" role="status" aria-label="Cargando MECAFUTURO">
        <img
          ngSrc="images/logo-mecafuturo.png"
          alt="MECAFUTURO S.A.S"
          width="160"
          height="60"
          style="height: 100px; width: auto; object-fit: contain;"
          priority
        />
        <div class="loader-bar-wrap">
          <div class="loader-bar"></div>
        </div>
        <p class="loader-text">Cargando...</p>
      </div>
    }
  `,
})
export class LoaderComponent implements OnInit {
  visible = signal(true);

  ngOnInit() {
    setTimeout(() => this.visible.set(false), 1500);
  }
}
