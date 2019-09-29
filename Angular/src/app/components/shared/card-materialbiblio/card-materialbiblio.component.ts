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

  constructor( private router: Router) {
    this.mbSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verMaterial() {
    this.mbSeleccionado.emit(this.index);
<<<<<<< HEAD:Angular/src/app/components/shared/card-materialbiblio/card-materialbiblio.component.ts
    this.router.navigate([`/search/${this.index}`]);
=======
    this.router.navigate(['/search/'+this.index]);
>>>>>>> f4cd18d27b70f8520b05f9030e1f10c728af9f13:src/app/components/shared/card-materialbiblio/card-materialbiblio.component.ts
  }

}
