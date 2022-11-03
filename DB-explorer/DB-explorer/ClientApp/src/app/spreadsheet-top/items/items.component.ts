import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { updateItems } from 'app/store/actions';
import { AppState } from 'app/store/state';
import { COLUMNS_SCHEMA_ITEMS, Item, ItemEdit, SpreadsheetTop } from '../../shared/model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() data!: SpreadsheetTop;
  displayedColumns: string[] = COLUMNS_SCHEMA_ITEMS.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA_ITEMS;
  item_write!: Item;
  dataSource_view = new MatTableDataSource<ItemEdit>();
  dataWrite!: SpreadsheetTop;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    const items_init = this.data.spreadsheet2.items.map(val => <ItemEdit>{
      id: val.id,
      name: val.name,
      label: val.label,
      isEdit: false
    });
    items_init.forEach(val => this.dataSource_view.data.push(Object.assign({}, val)));

    this.dataWrite = Object.assign({}, this.data);
  }

  onEdit(itemEdit: ItemEdit): boolean {
    itemEdit.isEdit = !itemEdit.isEdit;
    return itemEdit.isEdit;
  }
  onSubmit(itemEdit: ItemEdit): boolean {
    const item: any = {
      id: itemEdit.id,
      name: itemEdit.name,
      label: itemEdit.label,
    };
    this.store.dispatch(updateItems({ item }));
    itemEdit.isEdit = !itemEdit.isEdit;
    return itemEdit.isEdit;
  }

}
