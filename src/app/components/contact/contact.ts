import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  submitting = signal(false);
  toastVisible = signal(false);
  toastMessage = signal('');
  toastType = signal<'success' | 'error'>('success');

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  services = [
    { value: 'reparacion', label: 'Reparación de maquinaria' },
    { value: 'preventivo', label: 'Mantenimiento preventivo' },
    { value: 'correctivo', label: 'Mantenimiento correctivo' },
    { value: 'diagnostico', label: 'Diagnóstico técnico' },
    { value: 'repuestos', label: 'Venta de repuestos' },
    { value: 'soldadura', label: 'Soldadura y fabricación' },
    { value: 'hidraulico', label: 'Sistemas hidráulicos' },
    { value: 'motores', label: 'Motores industriales' },
    { value: 'otro', label: 'Otro' },
  ];

  hasError(control: string, error: string) {
    const c = this.form.get(control);
    return c?.touched && c?.hasError(error);
  }

  isInvalid(control: string) {
    const c = this.form.get(control);
    return c?.invalid && c?.touched;
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    await new Promise((r) => setTimeout(r, 1800));
    this.submitting.set(false);
    this.form.reset();
    this.showToast('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
  }

  private showToast(msg: string, type: 'success' | 'error') {
    this.toastMessage.set(msg);
    this.toastType.set(type);
    this.toastVisible.set(true);
    setTimeout(() => this.toastVisible.set(false), 4000);
  }
}
