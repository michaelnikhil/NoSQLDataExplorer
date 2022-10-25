import { Component, Input } from '@angular/core';
import { Spreadsheet1 } from '../../shared/model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Input() data!: Spreadsheet1;

  constructor() { }

}
