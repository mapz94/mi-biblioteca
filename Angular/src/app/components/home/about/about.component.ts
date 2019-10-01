import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  darkMode: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe( dark => this.darkMode = dark);
    this.themeService.setDarkTheme(this.themeService.loadDarkTheme());
  }

}
