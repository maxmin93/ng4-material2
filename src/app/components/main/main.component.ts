import { Component, OnInit } from '@angular/core';
import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';

import { Angulartics2 } from 'angulartics2';

import { DialogExampleComponent } from '../../components/dialog-example/dialog-example.component';

// Google Analytics
declare let ga: Function;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // about snack-bar
  message = {
  	type: 'NOTE',
  	text: 'SnackBar Test Message'
  };

  // about Slider
	sliderValue = 50;

  // about MdAutocomplete
  stateCtrl: FormControl;
  filteredStates: any;

	// about MdAutocomplete
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  ];
  
  constructor(
    private angulartics2: Angulartics2,
    private _element: ElementRef,
  	private snackBar: MdSnackBar,
  	private dialog: MdDialog    
  ) { 
    this.angulartics2.setUsername.next('Agraph');

    // about MdAutocomplete
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));    
  }

  ngOnInit() {
  }

  // about MdAutocomplete
  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }

  openSnackBar(message: any) {
    this.snackBar.open(message.text, message.type, {
      duration: 2000,
    });

    this.angulartics2.eventTrack.next({ action: 'myAction', properties: { category: 'myCategory', label: 'openSnackBar' }});
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent);

    this.angulartics2.eventTrack.next({ action: 'myAction', properties: { category: 'myCategory', label: 'openDialog' }});
  }
  
}
