import { Injectable } from '@angular/core';
import { ApiService } from '@app/config/api.service';

@Injectable({
  providedIn: 'root'
})
export class ExcluidCustomerService {

  constructor(
    private apiService: ApiService
  ) { }

  loadAllExluidCustomer(onSuccess: (result: any) => void) {
    return this.apiService.post('/excluidCust/v1/loadAllExcluidCust', {}, onSuccess)
  }
  defuseExcluidCustomer(excluidCustPk: number, onSuccess: (result: any) => void){
    return this.apiService.post('/excluidCust/v1/defuseExcluidCust', {
      excluidCustPK: excluidCustPk
    }, onSuccess);
  }
}
