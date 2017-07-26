// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { Angulartics2Module, Angulartics2GoogleAnalytics /*, Angulartics2GoogleTagManager*/ } from 'angulartics2';
import { RouterModule, Routes } from '@angular/router'

import { GoogleAnalyticsEventsService } from "./services/google-analytics-events.service";

// 이거 하나면 하위 모듈들 모두 커버 되는듯..
import { MaterialModule } from '@angular/material';
// 별도로 쓸만큼만 포함시킬 때
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';		
import { MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { MainComponent } from './components/main/main.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { AboutComponent } from './components/about/about.component';

import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    AboutComponent,
    TableExampleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpModule,
    
    RouterModule.forRoot(appRoutes),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics /*, Angulartics2GoogleTagManager*/ ]),
    Angulartics2Module.forChild(),

		MaterialModule, MdNativeDateModule, CdkTableModule,
    // MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdTableModule, MdAutocompleteModule    
  ],
  providers: [
    GoogleAnalyticsEventsService
  ],
  entryComponents: [
  	DialogExampleComponent,
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
