
export interface dataObject {
  spreadsheetTop: SpreadsheetTop;
  flattenSpreadsheet: FlattenResponseViewModel;
}
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
  id: string;
  name: string;
  description: string;
  parameter: string;
  value: string;
}
export interface SettingEdit extends Setting {
  isEdit: boolean;
}

export interface Spreadsheet2 extends SpreadsheetBase {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  label: string;
}

export interface ItemEdit extends Item {
  isEdit: boolean;
}

export interface PageDisplay {
  name: string;
  showPage: boolean;
}

export interface FlattenResponseViewModel
{
    jsonResponseId: string;
    spreadsheet1Id: string;
    spreadsheet2Id: string;
    spreadSheet1: Spreadsheet1ViewModel;
    spreadSheet2: Spreadsheet2ViewModel;
    settings: SettingViewModel[];
    items: ItemViewModel[];
}

export interface Spreadsheet1ViewModel
{
    id: string;
    name: string;
    description: string;
    settingsId: string[];
}

export interface Spreadsheet2ViewModel
{
  id: string;
  name: string;
  description: string;
  itemsId: string[];
}

export interface ItemViewModel
{
    id: string;
    name: string;
    label: string;
}

export interface SettingViewModel
{
    id: string;
    name: string;
    description: string;
    parameter: string;
    value: string;
}


export const emptyData: SpreadsheetTop = {
  id: '',
  spreadsheet1: {
    name: '',
    description: '',
    settings: []
  },
  spreadsheet2: {
    name: '',
    description: '',
    items: []
  }
};

export const emptyFlatData: FlattenResponseViewModel = {
  jsonResponseId:'',
  spreadsheet1Id: '',
  spreadsheet2Id: '',
  spreadSheet1: {
    id:'',
    name:'',
    description:'',
    settingsId:[]
  },
  spreadSheet2: {
    id:'',
    name:'',
    description:'',
    itemsId:[]
  },
  settings:[],
  items:[]
};

export const COLUMNS_SCHEMA_SETTINGS = [
  {
    key: 'name',
    type: 'text',
    label: 'Name'
  },
  {
    key: 'description',
    type: 'text',
    label: 'Description'
  },
  {
    key: 'parameter',
    type: 'text',
    label: 'Parameter'
  },
  {
    key: 'value',
    type: 'text',
    label: 'Value'
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: ''
  }
];

export const COLUMNS_SCHEMA_ITEMS = [
  {
    key: 'name',
    type: 'text',
    label: 'Name'
  },
  {
    key: 'label',
    type: 'text',
    label: 'label'
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: ''
  }
];
