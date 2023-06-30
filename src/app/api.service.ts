import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://apps.salud.com.sv:1009/reciclajeSocios';
  private authToken = '21539cd3697b4af3e4e997b1c1121e4ccad0b74d';

  constructor(private http: HttpClient) { }

  authenticate(): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.authToken}`);

    return this.http.get(`${this.baseUrl}/authenticate`, { headers }).toPromise();
  }

  getArticulosReciclaje(): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.authToken}`);

    return this.http.get(`${this.baseUrl}/api/articulosreciclaje_all/`, { headers }).toPromise();
  }

  getArticuloImageURL(articuloId: string): string {
    return `${this.baseUrl}/api/articulosreciclaje_all/${articuloId}/img1`;
  }

  getArticuloReciclajeById(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Token ${this.authToken}`);
    const body = { id };

    return this.http.post(`${this.baseUrl}/api/articulosreciclaje_pk/`, body, { headers });
  }

  guardarDatos(id: any, n: any,m: any ): Observable<any> {
    const body: any = 
        {
            id: id,
            csocio: n, 
            precio_ofertado: m, 
        }
    const headers = new HttpHeaders().set('Authorization', `Token ${this.authToken}`);
        console.log(body)
    return this.http.post(`${this.baseUrl}/api/articulosreciclaje_reservar`, body, { headers });
  }
}
