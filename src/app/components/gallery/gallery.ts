import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface GalleryItem {
  emoji: string;
  category: string;
  title: string;
  label: string;
}

@Component({
  selector: 'app-gallery',
  imports: [RevealDirective],
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeLightbox()',
  },
})
export class GalleryComponent {
  items: GalleryItem[] = [
    { emoji: '🚜', category: 'Excavadoras', title: 'Reparación CAT 320', label: 'Reparación excavadora CAT 320' },
    { emoji: '💧', category: 'Hidráulica', title: 'Sistema Komatsu', label: 'Sistema hidráulico Komatsu' },
    { emoji: '⚡', category: 'Motores', title: 'Motor John Deere', label: 'Motor John Deere reconstruido' },
    { emoji: '🔥', category: 'Soldadura', title: 'Estructura grúa', label: 'Soldadura estructura grúa' },
    { emoji: '🏗️', category: 'Mantenimiento', title: 'Flota constructora', label: 'Mantenimiento preventivo flota' },
    { emoji: '🏭', category: 'Instalaciones', title: 'Nuestro taller', label: 'Taller especializado MECAFUTURO' },
  ];

  selectedItem = signal<GalleryItem | null>(null);

  openLightbox(item: GalleryItem) {
    this.selectedItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedItem.set(null);
    document.body.style.overflow = '';
  }
}
