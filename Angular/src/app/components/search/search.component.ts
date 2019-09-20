import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MbibliograficoService } from 'src/app/services/mbibliografico.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { MaterialBibliografico } from 'src/app/class/MaterialBibliografico';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  materialBibliografico: MaterialBibliografico[] = [];
  mBiblioBuscado: MaterialBibliografico[] = [];
  termino: string;
  valorBusqueda = '';

  constructor(private activatedRoute: ActivatedRoute,
              private mBibliograficoService: MbibliograficoService,
              private router: Router,
              private dark: DarkModeService) {

  }

  darkMode: boolean;

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
    this.mBibliograficoService.getMbiblios().subscribe(val => this.materialBibliografico = val);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  buscarMB(valorBusqueda: string) {
    if (valorBusqueda.length >= 1) {
      this.termino = valorBusqueda;
      this.mBiblioBuscado = this.buscarMbiblios(valorBusqueda);
    }
  }

  buscarMbiblios(termino: string) {

    const mbiblioArr: MaterialBibliografico[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.materialBibliografico.length; i++) {

      const texto = this.materialBibliografico[i];

      const nombre = texto.titulo.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        texto.id = i;
        mbiblioArr.push(texto);
      }
      if (mbiblioArr.length === 10) {
        return mbiblioArr;
      }
    }
    return mbiblioArr;
  }

  verMaterial() {
  }

}
