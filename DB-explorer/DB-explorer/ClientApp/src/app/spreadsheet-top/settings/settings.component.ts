import { Component, Input, OnInit } from '@angular/core';
import { Setting, Spreadsheet1 } from '../../shared/model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

  @Input() data!: Spreadsheet1;
  dataSource: Setting[] = [];

  ngOnInit(): void {
    this.dataSource = this.data.settings;
  }
}
