import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  monedaActual = 'EURO';
  monedaConvertir = 'USD';
  total = 0;
  monedas: string[] = ['USD', 'EURO', 'LIBRA']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch (this.monedaActual) {
      case 'USD':
        if(this.monedaConvertir === 'USD') {
          this.total = this.cantidad;
        }
        if(this.monedaConvertir === 'EURO') {
          this.total = this.cantidad * 0.83 // dollar to euro
        }
        if(this.monedaConvertir === 'LIBRA') {
          this.total = this.cantidad * 0.72 //dollar to libra
        }
        break;
      case 'EURO':
        if(this.monedaConvertir === 'EURO') {
          this.total = this.cantidad;
        }
        if(this.monedaConvertir === 'USD') {
          this.total = this.cantidad * 1.21 // euro to dollar
        }
        if(this.monedaConvertir === 'LIBRA') {
          this.total = this.cantidad * 0.87 //euro to libra
        }
        break;
      case 'LIBRA':
        if(this.monedaConvertir === 'LIBRA') {
          this.total = this.cantidad;
        }
        if(this.monedaConvertir === 'USD') {
          this.total = this.cantidad * 1.39 // libra to dollar
        }
        if(this.monedaConvertir === 'EURO') {
          this.total = this.cantidad * 1.15 //libra to euro
        }
        break;
    }
  }
}
