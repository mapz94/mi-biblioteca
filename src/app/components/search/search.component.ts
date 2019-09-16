import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MbibliograficoService } from 'src/app/services/mbibliografico.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mbiblios:any[] = []
  termino:string;
  valorBusqueda:string = '';

  constructor( private activatedRoute:ActivatedRoute,
               private _mbService:MbibliograficoService,
               private router:Router) {

   }

  ngOnInit() {}

  buscarMB( valorBusqueda:string ){
    if(valorBusqueda.length >= 1){
      this.termino = valorBusqueda;
      this.mbiblios = this._mbService.buscarMbiblios(valorBusqueda);
    }
  }

}
