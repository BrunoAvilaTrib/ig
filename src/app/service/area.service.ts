import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqAddArea } from '@app/request/req-add-area';
import { ReqUpdateArea } from '@app/request/req-update-area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private apiService: ApiService
  ) { }

  loadAllAreas(onSuccess: (result: any) => void) {
    return this.apiService.post('/area/v1/loadAllArea', {
      businessFK: '1'
    }, onSuccess)
  }

  deleteArea(areaPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/area/v1/defuseArea', {
      areaPk: areaPk
    }, onSuccess);
  }
  
  addArea(area: ReqAddArea, onSuccess: (result: any) => void){
    return this.apiService.post('/area/v1/addArea', area, onSuccess);
  }

  updateArea(area: ReqUpdateArea, onSuccess: (result: any) => void){
    return this.apiService.post('/area/v1/updateArea', area, onSuccess);
  }

  findAreaById(areaPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/area/v1/loadArea', {
      areaPk: areaPk
    }, onSuccess);
  }
}
