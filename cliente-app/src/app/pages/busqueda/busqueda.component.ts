import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BackAdminService } from '../../services/back-admin.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backService: BackAdminService
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipo: ['', Validators.required],
      numero: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\d.]+$/), // Acepta números y puntos
          Validators.minLength(8),
          Validators.maxLength(15) // Longitud máxima con separadores
        ]
      ],
    });

  }

  formatDocumento() {
    const rawValue = this.formulario.get('numero')?.value.replace(/\D/g, ''); // Solo números
    if (rawValue) {
      const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agrega puntos como separador de miles
      this.formulario.get('numero')?.setValue(formattedValue, { emitEvent: false });
    }
  }
  buscar() {
    if (this.formulario.valid) {
      const { tipo, numero } = this.formulario.value;
      const numeroSinFormato = numero.replace(/\./g, '');

      this.backService.consultarCliente(tipo, numeroSinFormato).subscribe({
        next: (response) => {
          const cliente = response?.data ?? null;
          this.router.navigate(['/resumen'], { state: { cliente } });
        },
        error: (err) => {
          console.error('Error al consultar cliente:', err);
          this.router.navigate(['/resumen'], { state: { cliente: null } });
        },
      });
    }
  }
}