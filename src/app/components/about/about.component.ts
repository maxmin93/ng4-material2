import { Component, OnInit } from '@angular/core';
import { ElementRef, ChangeDetectorRef } from '@angular/core';

import { GoogleAnalyticsEventsService } from "../../services/google-analytics-events.service";

import { Angulartics2 } from 'angulartics2';

// Google Analytics
declare let ga: Function;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // about Grid list
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  constructor(
    private gaService: GoogleAnalyticsEventsService,
    private angulartics2: Angulartics2,
    private _element: ElementRef,    
  ) {     
  }

  ngOnInit() {
  }

  submitEvent(eventLabel: string) {
    this.gaService.emitEvent("testCategory", "testAction", eventLabel, 10);
  }

}
