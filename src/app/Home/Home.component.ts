import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiService } from '../api.service';
import { ModalArticuloComponent } from './component/modal-Articulo/modal-Articulo.component';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  public list: any;

  constructor(private apiService: ApiService, config: NgbModalConfig,
    private modalService: NgbModal) {
    this.fetchArticulosReciclaje();

    config.backdrop = true;
    config.centered = true;
  }

  ngOnInit() {

  }

  fetchArticulosReciclaje(): void {
    this.apiService.getArticulosReciclaje()
      .then(response => {
        // Maneja la respuesta
        console.log(response);
        this.list = response;
      })
      .catch(error => {
        // Maneja cualquier error
        console.error(error);
      });
  }

  public getImagen(id: string) {

    return this.apiService.getArticuloImageURL(id);
  }

  openModal(id:string){
    
    const modalRef = this.modalService.open(ModalArticuloComponent);
    modalRef.dismissed.subscribe(data => {
    });
    modalRef.componentInstance.id = id;
  }

}
