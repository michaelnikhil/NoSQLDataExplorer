export interface SpreadsheetTop {
  id: string;
  spreadsheet1: Spreadsheet1;
  spreadsheet2: Spreadsheet2;
}

export interface SpreadsheetBase {
  name: string;
  description: string;
}

export interface Spreadsheet1 extends SpreadsheetBase {
  settings: Setting[];
}

export interface Setting {
  name: string;
  description: string;
  parameter: string;
  value: string;
}

export interface Spreadsheet2 extends SpreadsheetBase {
  items: Item[];
}

export interface Item {
  name: string;
  label: string;
}

export interface PageDisplay {
  name: string;
  showPage: boolean;
}
