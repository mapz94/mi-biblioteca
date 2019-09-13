import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-materialbiblio',
  templateUrl: './card-materialbiblio.component.html',
  styleUrls: ['./card-materialbiblio.component.scss']
})
export class CardMaterialbiblioComponent implements OnInit {

  @Input() materialbiblio: any = {};
  @Input() index: number;

  @Output() mbSeleccionado: EventEmitter<number>;

  constructor( private router:Router) {
    this.mbSeleccionado = new EventEmitter();

  }

  ngOnInit() {
  }

  verMaterial(){
    this.mbSeleccionado.emit(this.index);
  }

}
