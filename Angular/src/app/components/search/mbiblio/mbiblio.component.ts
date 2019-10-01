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

  constructor(private route: ActivatedRoute, private mbiblioService: MbibliograficoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.idBook = params.get('id'));
    this.mbiblioService.getMBiblioById(this.idBook).subscribe(biblio => this.materialbiblio = biblio);
  }

  solicitarMB() {
    console.log('El libro ', this.materialbiblio.titulo, ' ID ', this.idBook, ' ha sido Solicitado');
  }
}
