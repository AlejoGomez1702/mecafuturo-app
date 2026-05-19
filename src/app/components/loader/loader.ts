import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="loader-overlay" [class.hidden]="!visible()" role="status" aria-label="Cargando MECAFUTURO">
        <div style="font-size: 2.5rem; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; letter-spacing: 0.1em; color: #F5C400;">
          MECA<span style="color: #fff;">FUTURO</span>
        </div>
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
