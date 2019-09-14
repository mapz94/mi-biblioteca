import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  errorInput:boolean = false;

  constructor(private dark:DarkModeService) { }

  darkMode:boolean;
  
  ngOnInit() {
    this.dark.darkMode.subscribe(dark => this.darkMode = dark);
  }

  recuperaPass(){
    this.errorInput = !this.errorInput;

  }

}
