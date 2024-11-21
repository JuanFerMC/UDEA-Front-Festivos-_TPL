import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { festivo } from '../../core/entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
   }

   public listar(anio: number): Observable<festivo[]> {
    return this.http.get<festivo[]>(`${this.url}listar/${anio}`);
  }


  public verificar(anio: number, mes: number, dia: number): Observable<string> {
    return this.http.get<string>(`${this.url}verificar/${anio}/${mes}/${dia}`, { responseType: 'text' as 'json' });
  }
  
}
