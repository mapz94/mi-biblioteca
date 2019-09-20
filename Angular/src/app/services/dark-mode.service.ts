import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode = new BehaviorSubject(false);

  getDarkModeValue() {
    let value = (/true/i).test(localStorage.getItem('colorMode'));
    this.darkMode.next((/true/i).test(localStorage.getItem('colorMode')));
    return value;
  }

  setDarkModeValue( check ) {
    let dark = check;
    this.eventChange(dark);
    this.darkMode.next(dark);
    return localStorage.setItem('colorMode', String(dark));
  }

  eventChange( dark: boolean ){
    this.darkMode.next(dark);
  }
  
  constructor() { }
}
