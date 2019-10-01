import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  darkMode: boolean;

  constructor( private themeService: ThemeService ) { }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
    this.themeService.loadDarkTheme();
  }

}
