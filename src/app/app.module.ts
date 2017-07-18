// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// 이거 하나면 하위 모듈들 모두 커버 되는듯..
import { MaterialModule } from '@angular/material';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';		// 별도로 쓸만큼만 포함시킬 때
import { MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpModule,

		MaterialModule, MdNativeDateModule, CdkTableModule,
    // MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdTableModule, MdAutocompleteModule    
  ],
  providers: [],
  entryComponents: [
  	DialogExampleComponent,
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
