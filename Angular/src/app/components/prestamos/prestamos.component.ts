import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  darkMode: boolean;

  constructor(private dark: DarkModeService) { }

  ngOnInit() {
    this.dark.darkMode.subscribe( dark => this.darkMode = dark);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
