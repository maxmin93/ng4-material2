import { Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { AboutComponent } from './components/about/about.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { MainComponent } from './components/main/main.component';

export const appRoutes: Routes = [

  { path: '',      component: MainComponent },
  { path: 'table', component: TableExampleComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: ''}
    
];