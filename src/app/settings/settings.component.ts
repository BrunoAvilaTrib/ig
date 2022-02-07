import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '@app/config/api.service';
import { LayermsgService } from '../config/layermsg.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private configs: any = [];

  constructor(
              private apiService: ApiService,
              private layerMsgService: LayermsgService) { 
      
  }

  ngOnInit() {
    this.apiService.post('/generalConfig/v1/loadGeneralConfig', {
    }, (result: any) => {
        const configurations = result.data;
        this.configs = configurations;
        console.log(this.configs);
    });
  }

  changeStateConf(i, e) {
    e.preventDefault();
    const stateCurrent = this.configs[i].state;
    let stateToChange;
    stateToChange = stateCurrent === 'A' ? stateToChange = 'B' : stateToChange = 'A';
    this.apiService.post('/generalConfig/v1/updateGeneralConfig', {
      inGeneralConfigState: stateToChange,
      generalConfigPk: this.configs[i].generalConfigPk
    }, (result: any) => {
      this.configs[i].state = stateToChange;
      this.layerMsgService.showMessageOk('8888');
    });
  }

}
