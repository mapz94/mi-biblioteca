import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  errorInput = false;

  constructor(private themeService: ThemeService) { }

  darkMode: boolean;

  ngOnInit() {
    this.themeService.isDarkTheme.subscribe(dark => this.darkMode = dark);
  }

  recuperaPass() {
    this.errorInput = !this.errorInput;

  }

}
