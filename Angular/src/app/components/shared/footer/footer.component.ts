import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  darkMode:boolean;

  constructor( private dark: DarkModeService ) { }

  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
  }

}
