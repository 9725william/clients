import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipo: ['', Validators.required],
      numero: [
        '',
        [Validators.required, Validators.pattern(/^\d{8,11}$/)]
      ]
    });
  }

  formatDocumento() {
    const rawValue = this.formulario.get('numero')?.value.replace(/\D/g, '');
    const formatted = new Intl.NumberFormat().format(Number(rawValue));
    this.formulario.get('numero')?.setValue(rawValue, { emitEvent: false });
  }

  buscar() {
    const { tipo, numero } = this.formulario.value;
    this.router.navigate(['/resumen'], { state: { tipo, numero } });
  }
}
