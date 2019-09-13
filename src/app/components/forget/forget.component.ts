import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  errorInput:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  recuperaPass(){
    this.errorInput = !this.errorInput;

  }

}
