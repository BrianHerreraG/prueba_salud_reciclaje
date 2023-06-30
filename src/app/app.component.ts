import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_salud_reciclaje';
  constructor(private apiService: ApiService) { 
    
  }

  // authenticate(): void {
  //   this.apiService.authenticate()
  //     .then(response => {
  //       // Maneja la respuesta
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // Maneja cualquier error
  //       console.error(error);
  //     });
  // }

  // fetchArticulosReciclaje(): void {
  //   this.apiService.getArticulosReciclaje()
  //     .then(response => {
  //       // Maneja la respuesta
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // Maneja cualquier error
  //       console.error(error);
  //     });
  // }
}
