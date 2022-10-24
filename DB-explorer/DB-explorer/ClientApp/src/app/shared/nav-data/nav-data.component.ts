import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-data',
  templateUrl: './nav-data.component.html',
  styleUrls: ['./nav-data.component.css']
})
export class NavDataComponent {

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
