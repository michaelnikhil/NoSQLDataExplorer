import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { updateSettings } from 'app/store/actions';
import { AppState } from 'app/store/state';
import { COLUMNS_SCHEMA_SETTINGS, Setting, SettingEdit, SpreadsheetTop } from '../../shared/model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() data!: SpreadsheetTop;
  displayedColumns: string[] = COLUMNS_SCHEMA_SETTINGS.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA_SETTINGS;
  setting_write!: Setting;
  dataSource_view = new MatTableDataSource<SettingEdit>();
  dataWrite!: SpreadsheetTop;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    const settings_init = this.data.spreadsheet1.settings.map(val => <SettingEdit>{
      id: val.id,
      name: val.name,
      description: val.description,
      parameter: val.parameter,
      value: val.value,
      isEdit: false
    });
    settings_init.forEach(val => this.dataSource_view.data.push(Object.assign({}, val)));

    this.dataWrite = Object.assign({}, this.data);
  }

  onEdit(settingEdit: SettingEdit): boolean {
    settingEdit.isEdit = !settingEdit.isEdit;
    return settingEdit.isEdit;
  }
  onSubmit(settingEdit: SettingEdit): boolean {
    const setting: any = {
      id: settingEdit.id,
      name: settingEdit.name,
      description: settingEdit.description,
      parameter: settingEdit.parameter,
      value: settingEdit.value
    };
    this.store.dispatch(updateSettings({ setting }));
    settingEdit.isEdit = !settingEdit.isEdit;
    return settingEdit.isEdit;
  }
}
