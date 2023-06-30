import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Articulos-reservados',
  templateUrl: './Articulos-reservados.component.html',
  styleUrls: ['./Articulos-reservados.component.scss']
})
export class ArticulosReservadosComponent implements OnInit {

  articulos: any[] =[
    {
      item: "Computadora",
      socio: "Brian HG",
      precio: '35'
    },
    {
      item: "Computadora",
      socio: "Brian HG",
      precio: '35'
    },
    {
      item: "Computadora",
      socio: "Brian HG",
      precio: '35'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
