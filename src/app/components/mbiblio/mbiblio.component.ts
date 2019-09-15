import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MbibliograficoService } from 'src/app/services/mbibliografico.service';

@Component({
  selector: 'app-mbiblio',
  templateUrl: './mbiblio.component.html',
  styleUrls: ['./mbiblio.component.scss']
})
export class MbiblioComponent implements OnInit {

  idBook:string;
  materialbiblio: any = {};

  constructor(private route:ActivatedRoute, private mbiblio:MbibliograficoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.idBook = params.get('id'));
    this.materialbiblio = this.mbiblio.getMBiblio(this.idBook);
  }

  solicitarMB(){
    console.log('El libro ',this.materialbiblio.titulo, ' ID ', this.idBook, ' ha sido Solicitado');
  }
}
