import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MbibliograficoService } from 'src/app/services/mbibliografico.service';
import { MaterialBibliografico } from 'src/app/class/MaterialBibliografico';

@Component({
  selector: 'app-mbiblio',
  templateUrl: './mbiblio.component.html',
  styleUrls: ['./mbiblio.component.scss']
})
export class MbiblioComponent implements OnInit {

  idBook: string;
  materialbiblio: MaterialBibliografico;

  constructor(private route: ActivatedRoute, private mbiblio: MbibliograficoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.idBook = params.get('id'));
    this.mbiblio.getMBiblioById(this.idBook).subscribe(val => this.materialbiblio = val);
    console.log(this.materialbiblio);
  }

  solicitarMB() {
    console.log('El libro ', this.materialbiblio.titulo, ' ID ', this.materialbiblio.id, ' ha sido Solicitado');
  }
}
