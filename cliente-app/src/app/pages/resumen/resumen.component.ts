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

  ngOnInit(): void {
    const state = history.state;
    this.cliente = state?.cliente || null;
  }
}