import { Injectable } from '@angular/core';

// Google Analytics
declare let ga: Function;

// 코드 참조 ==> 
// Tutorial: Angular 2 & Google Analytics with Event tracking
// https://blog.thecodecampus.de/angular-2-include-google-analytics-event-tracking/

@Injectable()
export class GoogleAnalyticsEventsService {

  constructor() { }

  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
