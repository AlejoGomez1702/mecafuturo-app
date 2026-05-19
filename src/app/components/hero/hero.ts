import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('Maquinaria Pesada');

  private readonly words = ['Maquinaria Pesada', 'Equipos Industriales', 'Motores y Sistemas', 'Hidráulica Avanzada'];
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    let wi = 0;
    let ci = 0;
    let deleting = false;

    const type = () => {
      const word = this.words[wi];
      if (!deleting) {
        ci++;
        this.typedText.set(word.slice(0, ci));
      } else {
        ci--;
        this.typedText.set(word.slice(0, ci));
      }

      let delay = deleting ? 60 : 100;
      if (!deleting && ci === word.length) {
        delay = 2200;
        deleting = true;
      } else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % this.words.length;
        delay = 400;
      }

      this.timeoutId = setTimeout(type, delay);
    };

    this.timeoutId = setTimeout(type, 1000);
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }
}
