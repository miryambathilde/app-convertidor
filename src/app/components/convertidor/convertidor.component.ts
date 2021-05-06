import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  monedaActual = 'EUR';
  monedaConvertir = 'USD';
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
