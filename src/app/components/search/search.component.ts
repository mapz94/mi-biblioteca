import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MbibliograficoService } from 'src/app/services/mbibliografico.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mbiblios: any[] = []
  termino: string;
  valorBusqueda: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private _mbService: MbibliograficoService,
    private router: Router,
    private dark: DarkModeService) {

  }

  darkMode: boolean;

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
  }


  buscarMB(valorBusqueda: string) {
    if (valorBusqueda.length >= 1) {
      this.termino = valorBusqueda;
      this.mbiblios = this._mbService.buscarMbiblios(valorBusqueda);
    }
  }

}
