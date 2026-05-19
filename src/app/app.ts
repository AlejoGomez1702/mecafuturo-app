import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LoaderComponent } from './components/loader/loader';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { MetricsComponent } from './components/metrics/metrics';
import { ServicesComponent } from './components/services/services';
import { GalleryComponent } from './components/gallery/gallery';
import { BenefitsComponent } from './components/benefits/benefits';
import { CtaComponent } from './components/cta/cta';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    LoaderComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MetricsComponent,
    ServicesComponent,
    GalleryComponent,
    BenefitsComponent,
    CtaComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class App {
  backTopVisible = signal(false);

  onScroll() {
    this.backTopVisible.set(window.scrollY > 500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
