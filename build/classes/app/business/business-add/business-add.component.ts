import { Component, OnInit } from '@angular/core';
import { LayermsgService } from '@app/config/layermsg.service';
import { BusinessService } from '@app/service/business.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parametries } from '@app/config/parametries';
import { Business } from '@app/model/business';
import { EnumStatus } from '@app/enumeration/enum-status.enum';

@Component({
  selector: 'app-business-add',
  templateUrl: './business-add.component.html',
  styleUrls: ['./business-add.component.scss']
})
export class BusinessAddComponent implements OnInit {

  formBusinessAdd: FormGroup;
  constructor(private layerMsgService: LayermsgService,
    private businessService: BusinessService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formBusinessAdd = this.formBuilder.group({
      name: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.BUSINESS_NAME_MIN_LENGTH),
          Validators.maxLength(Parametries.BUSINESS_NAME_MAX_LENGTH),
          Validators.pattern(Parametries.AREA_ONLY_NUMBER_AND_CADENA)]
      ],

      ruc: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.BUSINESS_RUC_MIN_LENGTH),
          Validators.maxLength(Parametries.BUSINESS_RUC_MAX_LENGTH),
          Validators.pattern(Parametries.AREA_ONLY_NUMBER_AND_CADENA)]
      ],

      email: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.BUSINESS_EMAIL_MIN_LENGTH),
          Validators.maxLength(Parametries.BUSINESS_EMAIL_MAX_LENGTH)]
      ],

    });
  }
  onFormSubmit() {

    if (this.formBusinessAdd.invalid) {

      return;
    }else {

      this.addBusiness();
    }
  }

  private addBusiness(){
   
    var business: Business = new Business();
    console.log(this.formBusinessAdd);
    business.fromFormBusinessAdd(this.formBusinessAdd);
   this.businessService.addBusiness(business.toBusinessAdd(), (result: any) => {

      this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => {

        this.router.navigate(['business']);
      });
    });
  }

  get formGroup() {

    return this.formBusinessAdd.controls;
  }
}
