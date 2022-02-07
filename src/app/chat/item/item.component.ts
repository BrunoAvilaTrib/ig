import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { SharedService } from '@app/config/shared.service';
import { User } from '@app/model/user.class';
import { SharedVariable } from '@app/config/shared';

@Component({
  selector: 'chat-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Output() clickEvt = new EventEmitter();
  @Input() item: any;
  @Input() index: any;
  private user: User;

  constructor(protected apiService: ApiService,
              private sharedService: SharedService) {
              this.user = sharedService.get(SharedVariable.USER);
  }

  ngOnInit() {
  }

  loadCustByOffi(item, e) {
    e.preventDefault();
    this.clickEvt.emit({
      item: this.item,
      index: this.index
    });
  }

}
