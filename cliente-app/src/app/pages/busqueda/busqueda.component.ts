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
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipo: ['', Validators.required],
      numero: [
        '',
        [Validators.required, Validators.pattern(/^\d{8,11}$/)],
      ],
    });
  }

  formatDocumento() {
    const rawValue = this.formulario.get('numero')?.value.replace(/\D/g, '');
    this.formulario.get('numero')?.setValue(rawValue, { emitEvent: false });
  }

  buscar() {
    const { tipo, numero } = this.formulario.value;

    this.backService.consultarCliente(tipo, numero).subscribe({
      next: (data) => {
        // Enviar cliente al componente resumen
        this.router.navigate(['/resumen'], { state: { cliente: data } });
      },
      error: (err) => {
        console.error('Error al consultar cliente:', err);
        // Enviar estado vacío (cliente null) para mostrar mensaje en resumen
        this.router.navigate(['/resumen'], { state: { cliente: null } });
      },
    });
  }
}