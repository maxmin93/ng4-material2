import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Angulartics2GoogleAnalytics /*, Angulartics2GoogleTagManager*/ } from 'angulartics2';

// Google Analytics
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    // private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    public router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });        
  }

  ngOnInit() {
  }

};




