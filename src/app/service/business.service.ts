import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';
import { ReqBusinessArea } from '@app/request/req-add-business';
import { ReqUpdateBusiness } from '@app/request/req-update-business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private apiService: ApiService) { }


  loadAllBusiness( onSuccess: (result: any) => void) {
    return this.apiService.post('/business/v1/loadAllBusiness', {}, onSuccess);
  }


  addBusiness(business: ReqBusinessArea, onSuccess: (result: any) => void){
    return this.apiService.post('/business/v1/addBusiness', business, onSuccess);
  }


  findBusinessById(businessPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/business/v1/loadBusiness', {
      businessPK: businessPk
    }, onSuccess);
  }

  
  updateBusiness(business: ReqUpdateBusiness, onSuccess: (result: any) => void){
    return this.apiService.post('/business/v1/updateBusiness', business, onSuccess);
  }
}

