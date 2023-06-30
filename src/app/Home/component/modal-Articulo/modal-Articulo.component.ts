import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-modal-Articulo',
  templateUrl: './modal-Articulo.component.html',
  styleUrls: ['./modal-Articulo.component.scss']
})
export class ModalArticuloComponent implements OnInit {
  //datos
  @Input() id: any=0;
  item:any[]= [];
  nombre ="";
  monto = "";
  datos:any ={}
  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getArticuloReciclajeById(this.id).subscribe(
      data => {
        this.item = data;
        console.log(this.item); // Mostrar los datos del artículo en la consola para verificar
      },
      error => {
        console.error(error);
      }
    );
  }

  guardarDatos(): void {

    this.apiService.guardarDatos(this.id,"Brian",25).subscribe(
      data => {
        console.log('Datos guardados con éxito:', data);
      },
      error => {
        console.error('Error al guardar los datos:', error);
      }
    );
  }

}
