import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from '@app/config/api.service';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message ;
	
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

}
