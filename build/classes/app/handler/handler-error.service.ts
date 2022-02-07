import { Injectable } from '@angular/core';
import { EnumStatusError } from '@app/enumeration/enum-status-error.enum';
import { AuthService } from '@app/auth/auth.service';
import { LayermsgService } from '@app/config/layermsg.service';

@Injectable({
  providedIn: 'root'
})
export class HandlerErrorService {

  constructor(
    private authService: AuthService,
    private layerMsgService: LayermsgService
  ) { }

  extractCodeError(error: any) : string{
		if(error.error && error.error.status){
			return error.error.status.code;
		}
		return undefined;
  }
  
  isValid(status: EnumStatusError){
    if(status){
      switch(status){
        case EnumStatusError.SESSION_EXPIRE:
          this.authService.logout();
          return false;
      }
    }
    return true;
  }
  
  handler(error: any, onSucces: () => void){
    let code = this.extractCodeError(error);
    let status = EnumStatusError.findByCode(code);
    if(this.isValid(status)){
      onSucces();
    }
  }

}
