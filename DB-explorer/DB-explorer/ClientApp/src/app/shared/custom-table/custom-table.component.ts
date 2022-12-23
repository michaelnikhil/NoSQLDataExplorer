import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() dataSource_view!: MatTableDataSource<any>;
  @Input() displayedColumns!: string[];
  @Input() columnsSchema: any;
  constructor() { }

  ngOnInit(): void {
  }



}
