import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  darkMode: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe( dark => this.darkMode = dark);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
