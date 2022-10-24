import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { SpreadsheetTopComponent } from './spreadsheet-top/spreadsheet-top.component';
import { Spreadsheet1Component } from './spreadsheet-top/spreadsheet1/spreadsheet1.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },

    { path: 'counter', component: CounterComponent },
    {
        path: 'spreadsheet', component: SpreadsheetTopComponent,
        children: [
            { path: 'spreadsheet1', component: Spreadsheet1Component }
        ]
    },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const ArrayOfComponents = [HomeComponent, CounterComponent, SpreadsheetTopComponent, Spreadsheet1Component]
