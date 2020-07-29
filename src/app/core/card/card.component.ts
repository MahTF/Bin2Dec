import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  titulo = 'Converter Binário para Decimal';

  @Input() binario: string;
  @Input() decimal: string;
  decimalConvertido: number;


  constructor() { }

  ngOnInit(): void {
  }

  converter() {
    this.decimalConvertido = parseInt(this.binario, 2);
    this.decimal = this.decimalConvertido.toString();
  }
}
