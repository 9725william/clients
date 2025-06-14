import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  cliente: Cliente | null = null;

  ngOnInit() {
    const state = history.state;
    if (state?.tipo === 'C' && state?.numero === '23445322') {
      this.cliente = {
        primerNombre: 'Carlos',
        segundoNombre: 'Andrés',
        primerApellido: 'Pérez',
        segundoApellido: 'Gómez',
        telefono: '3001234567',
        direccion: 'Cra 45 #123-45',
        ciudad: 'Bogotá'
      };
    }
  }
}
