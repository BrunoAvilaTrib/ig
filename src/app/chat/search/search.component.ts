import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'chat-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() message ;

  constructor() { 
		  	  
  }

  ngOnInit() {

  }
  }

