import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Testimonial {
  initials: string;
  name: string;
  company: string;
  text: string;
  delay: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  templateUrl: './testimonials.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      initials: 'CL',
      name: 'Carlos López',
      company: 'Gerente — Constructora Andina S.A.',
      text: '"MECAFUTURO salvó nuestra operación. Tuvimos una falla crítica en una excavadora CAT y en menos de 18 horas estaba funcionando perfectamente. Profesionalismo total."',
      delay: 'delay-100',
    },
    {
      initials: 'MR',
      name: 'María Rodríguez',
      company: 'Directora Operaciones — MinerCol',
      text: '"Llevamos 3 años trabajando con MECAFUTURO para el mantenimiento de toda nuestra flota. La calidad del trabajo es excepcional y los precios muy competitivos. 100% recomendados."',
      delay: 'delay-200',
    },
    {
      initials: 'JP',
      name: 'Julián Pérez',
      company: 'Jefe de Mantenimiento — AgroTech',
      text: '"El diagnóstico técnico que realizaron fue impresionante. Identificaron problemas que otros talleres no pudieron detectar en semanas. El sistema hidráulico quedó perfecto."',
      delay: 'delay-300',
    },
    {
      initials: 'AG',
      name: 'Andrés García',
      company: 'Propietario — Transportes García',
      text: '"Excelente servicio en la reparación de nuestros motores industriales. El equipo técnico es muy profesional y los plazos de entrega siempre se cumplen al pie de la letra."',
      delay: 'delay-100',
    },
    {
      initials: 'LM',
      name: 'Luis Martínez',
      company: 'CEO — CivEnco Ltda.',
      text: '"Contratamos MECAFUTURO para el mantenimiento preventivo anual de 15 equipos. El resultado fue increíble: cero fallas durante todo el año y reducción del 30% en costos."',
      delay: 'delay-200',
    },
    {
      initials: 'PC',
      name: 'Patricia Castillo',
      company: 'Gerente — Industrias Castillo',
      text: '"La soldadura y fabricación de piezas fue perfecta. Necesitábamos componentes especiales que no se consiguen en el mercado y MECAFUTURO los fabricó con calidad superior."',
      delay: 'delay-300',
    },
  ];
}
