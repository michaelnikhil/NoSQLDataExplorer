import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { dataReducer } from './store/reducer';
import { AppEffects } from './store/effects';
import { environment } from 'environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { JsonPrettyPrintComponent } from './home/json-pretty-print/json-pretty-print.component';
import { JsonFlatComponent } from './home/json-flat/json-flat.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    JsonPrettyPrintComponent,
    JsonFlatComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({state: dataReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NoopAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgrxFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
