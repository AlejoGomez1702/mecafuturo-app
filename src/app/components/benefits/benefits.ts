import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Benefit {
  title: string;
  desc: string;
  delay: string;
  iconPath: string;
}

@Component({
  selector: 'app-benefits',
  imports: [RevealDirective],
  templateUrl: './benefits.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      title: 'Atención en 24 horas',
      desc: 'Diagnóstico y respuesta garantizada en menos de 24 horas para minimizar tu tiempo fuera de operación.',
      delay: 'delay-100',
      iconPath: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 6v6l4 2',
    },
    {
      title: 'Personal certificado',
      desc: 'Ingenieros y técnicos con certificaciones internacionales y más de 5 años de experiencia promedio.',
      delay: 'delay-200',
      iconPath: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    },
    {
      title: 'Tecnología avanzada',
      desc: 'Equipos de diagnóstico computarizado de última generación para detección precisa de fallas.',
      delay: 'delay-300',
      iconPath: 'M2 3h20a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2zM8 21h8M12 17v4',
    },
    {
      title: 'Garantía total',
      desc: 'Cada trabajo incluye garantía por escrito. Si algo no funciona, lo solucionamos sin costo adicional.',
      delay: 'delay-100',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    },
    {
      title: 'Soporte técnico',
      desc: 'Acompañamiento continuo post-servicio. Nuestros técnicos disponibles para consultas y seguimiento.',
      delay: 'delay-200',
      iconPath: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3',
    },
    {
      title: 'Calidad certificada',
      desc: 'Procesos y repuestos bajo los más altos estándares de calidad del sector industrial nacional.',
      delay: 'delay-300',
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z',
    },
  ];
}
