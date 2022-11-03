import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { PrettyPrintPipe } from './shared/pretty-print.pipe';
import { ItemsComponent } from './spreadsheet-top/items/items.component';
import { SettingsComponent } from './spreadsheet-top/settings/settings.component';
import { SpreadsheetTopComponent } from './spreadsheet-top/spreadsheet-top.component';
import { Spreadsheet1Component } from './spreadsheet-top/spreadsheet1/spreadsheet1.component';
import { Spreadsheet2Component } from './spreadsheet-top/spreadsheet2/spreadsheet2.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'spreadsheet', component: SpreadsheetTopComponent}
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const ArrayOfComponents = [
  HomeComponent,
  CounterComponent,
  SpreadsheetTopComponent,
  Spreadsheet1Component,
  Spreadsheet2Component,
  SettingsComponent,
  ItemsComponent,
  NavMenuComponent,
  PrettyPrintPipe];
