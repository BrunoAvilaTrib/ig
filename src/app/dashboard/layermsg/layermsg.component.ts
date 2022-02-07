import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { LayermsgService } from '@app/config/layermsg.service';
import { Observable, Subscription } from 'rxjs';
import { ControlMessage } from '@app/model/control-message';

@Component({
  selector: '<dashboard-layermsg>',
  templateUrl: './layermsg.component.html',
  styleUrls: ['./layermsg.component.scss']
})
export class LayermsgComponent implements OnInit, OnDestroy {

  public bean: any;
  private subscription: Subscription;

  constructor(
    private layerMsgService: LayermsgService) { 
    }

  ngOnInit() {
    this.subscription = this.layerMsgService.subscribe((controlMessage: ControlMessage) => {
      this.bean = controlMessage;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
