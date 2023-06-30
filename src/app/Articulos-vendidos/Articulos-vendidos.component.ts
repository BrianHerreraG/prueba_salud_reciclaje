import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Articulos-vendidos',
  templateUrl: './Articulos-vendidos.component.html',
  styleUrls: ['./Articulos-vendidos.component.scss']
})
export class ArticulosVendidosComponent implements OnInit {

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
