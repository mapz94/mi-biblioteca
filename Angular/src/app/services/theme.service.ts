import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme = new Subject<boolean>();
  public isDarkTheme = this.darkTheme.asObservable();
  private body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;

  setDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme.next(isDarkTheme);
    localStorage.setItem('colorMode', String(isDarkTheme));
    if (isDarkTheme) {
      this.body[0].style.backgroundColor = '#37474F';
    } else {
      this.body[0].style.backgroundColor = '#fff';
    }
  }

  loadDarkTheme() {
    const value = (/true/i).test(localStorage.getItem('colorMode'));
    this.darkTheme.next((/true/i).test(localStorage.getItem('colorMode')));
    return value;
  }

  constructor() { }
}
