import { Component, Input, OnInit } from '@angular/core';
import { Spreadsheet1 } from 'src/app/shared/model';

@Component({
  selector: 'app-spreadsheet1',
  templateUrl: './spreadsheet1.component.html',
  styleUrls: ['./spreadsheet1.component.css']
})
export class Spreadsheet1Component implements OnInit {

  @Input()  data!: Spreadsheet1;

  constructor() { }

  ngOnInit(): void {
    console.log("init");
    console.log("** " + this.data.name)
  }

}
