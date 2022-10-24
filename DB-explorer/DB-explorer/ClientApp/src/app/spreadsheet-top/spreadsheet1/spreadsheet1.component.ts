import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spreadsheet1',
  templateUrl: './spreadsheet1.component.html',
  styleUrls: ['./spreadsheet1.component.css']
})
export class Spreadsheet1Component implements OnInit {

  @Input() show= false;

  constructor() { }

  ngOnInit(): void {
    console.log("init");
  }

}
