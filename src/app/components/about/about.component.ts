import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  darkMode:boolean;

  constructor(private dark: DarkModeService) { }

  ngOnInit() {
    this.dark.darkMode.subscribe( dark => this.darkMode = dark);
  }

}
