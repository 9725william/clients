
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackAdminService {

  private readonly urlBase: string = environment.back;

  constructor(private http: HttpClient) { }

  /**
   * Consulta cliente por tipo y número de documento.
   * @param tipo Tipo de documento (e.g., 'C' o 'P')
   * @param numero Número de documento
   */
  consultarCliente(tipo: string, numero: string): Observable<any> {
    const url = `${this.urlBase}/consult/${tipo}/${numero}`;
    return this.http.get(url);
  }
}

