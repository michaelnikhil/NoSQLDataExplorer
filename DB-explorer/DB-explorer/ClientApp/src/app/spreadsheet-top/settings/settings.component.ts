import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { loadDataSuccess, updateSettings } from 'app/store/actions';
import { AppState } from 'app/store/state';
import { COLUMNS_SCHEMA_SETTINGS, emptyData, Setting, Spreadsheet1, SpreadsheetTop } from '../../shared/model';

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
  dataSource = new MatTableDataSource<Setting>();
  dataWrite! : SpreadsheetTop ;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.data.spreadsheet1.settings.forEach(val => this.dataSource.data.push(Object.assign({}, val)));
    this.dataWrite = Object.assign({}, this.data);
  }

  onEdit(setting: Setting) : boolean {
    setting.isEdit = !setting.isEdit;
      return setting.isEdit;
  }
  onSubmit(setting: Setting) : boolean {
    setting.isEdit = !setting.isEdit;
    console.log("%O", this.updateDataObject(setting));
    // this.store.dispatch(updateSettings({setting }));
     this.store.dispatch(loadDataSuccess({data:this.dataWrite}));
      return setting.isEdit;
  }

  updateDataObject(setting: Setting) : SpreadsheetTop {
    let tmp = Object.assign({}, this.data);
    console.log('init obj %O',tmp);
    console.log('setting %O',setting);
    const index = tmp.spreadsheet1.settings.findIndex(element => element.id == setting.id);
    let newObject : SpreadsheetTop = emptyData;

    
    let tmp2 = tmp.spreadsheet1.settings.map(element => {
      return element.id == setting.id ? setting : element;
      }
    );

    console.log('tmp2 %O',tmp2);
    tmp.spreadsheet1.settings.forEach(
      set => {
        if (set.id == setting.id){
          console.log('id = ' + setting.id)
          set.description = setting.description;
          set.parameter = setting.parameter;
        }
      }
    );
    return tmp;
  }

}
