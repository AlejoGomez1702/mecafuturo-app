import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Service {
  emoji: string;
  title: string;
  desc: string;
  delay: string;
  iconPath: string;
}

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services: Service[] = [
    {
      emoji: '🔧',
      title: 'Reparación de Maquinaria',
      desc: 'Diagnóstico y reparación integral de maquinaria pesada con repuestos originales y técnicos certificados.',
      delay: 'delay-100',
      iconPath: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
    },
    {
      emoji: '⚙️',
      title: 'Mantenimiento Preventivo',
      desc: 'Programas de mantenimiento planificados para evitar fallas y prolongar la vida útil de tus equipos.',
      delay: 'delay-200',
      iconPath: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41',
    },
    {
      emoji: '🔩',
      title: 'Mantenimiento Correctivo',
      desc: 'Intervención técnica inmediata ante fallas críticas para restaurar la operatividad de tu maquinaria.',
      delay: 'delay-300',
      iconPath: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z',
    },
    {
      emoji: '🖥️',
      title: 'Diagnóstico Técnico',
      desc: 'Análisis computarizado con equipos de última generación para identificar fallas con precisión milimétrica.',
      delay: 'delay-400',
      iconPath: 'M22 12 18 12 15 21 9 3 6 12 2 12',
    },
    {
      emoji: '🏭',
      title: 'Venta de Repuestos',
      desc: 'Repuestos originales y de alta calidad para toda la línea de maquinaria pesada con envío a nivel nacional.',
      delay: 'delay-100',
      iconPath: 'M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z',
    },
    {
      emoji: '🔥',
      title: 'Soldadura y Fabricación',
      desc: 'Soldadura industrial de precisión y fabricación de piezas a medida con materiales certificados.',
      delay: 'delay-200',
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      emoji: '💧',
      title: 'Sistemas Hidráulicos',
      desc: 'Diagnóstico, reparación y reconstrucción de sistemas hidráulicos con componentes de alta presión.',
      delay: 'delay-300',
      iconPath: 'M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z',
    },
    {
      emoji: '⚡',
      title: 'Motores Industriales',
      desc: 'Reconstrucción completa de motores diesel e industriales con garantía de funcionamiento total.',
      delay: 'delay-400',
      iconPath: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 6v6l4 2',
    },
  ];
}
