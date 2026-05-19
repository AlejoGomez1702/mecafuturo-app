import { Component, signal, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

interface Metric {
  displayValue: number;
  target: number;
  suffix: string;
  label: string;
  desc: string;
}

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent implements AfterViewInit {
  @ViewChild('metricsEl') metricsEl!: ElementRef<HTMLElement>;

  metrics = signal<Metric[]>([
    { displayValue: 0, target: 10, suffix: '+', label: 'Años de experiencia', desc: 'En el sector industrial' },
    { displayValue: 0, target: 500, suffix: '+', label: 'Equipos reparados', desc: 'Con garantía total' },
    { displayValue: 0, target: 98, suffix: '%', label: 'Satisfacción clientes', desc: 'Calificación promedio' },
    { displayValue: 0, target: 24, suffix: 'h', label: 'Tiempo de respuesta', desc: 'Diagnóstico garantizado' },
    { displayValue: 0, target: 50, suffix: '+', label: 'Clientes activos', desc: 'Empresas en Colombia' },
  ]);

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateAll();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(this.metricsEl.nativeElement);
  }

  private animateAll() {
    this.metrics().forEach((_, i) => this.animateCounter(i, 2200));
  }

  private animateCounter(index: number, duration: number) {
    const target = this.metrics()[index].target;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      this.metrics.update((list) => {
        const updated = [...list];
        updated[index] = { ...updated[index], displayValue: current };
        return updated;
      });

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
}
