import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = `${environment.UrlPrincipal}/api/cliente`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  post(cliente: Cliente) {
    return this.http.post(this.baseUrl, cliente);
  }

  put(cliente: Cliente) {
    return this.http.put(`${this.baseUrl}/${cliente.clienteId}`, cliente);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
