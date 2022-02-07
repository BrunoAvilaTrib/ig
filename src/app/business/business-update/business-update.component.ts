import { Component, OnInit } from '@angular/core';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parametries } from '@app/config/parametries';
import { BusinessService } from '@app/service/business.service';
import { Business } from '@app/model/business';
import { EnumStatus } from '@app/enumeration/enum-status.enum';

@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.scss']
})
export class BusinessUpdateComponent implements OnInit {
  formBusinessUpdate: FormGroup;
  private business : any;


  constructor(
    private layerMsgService: LayermsgService,
    private businessService: BusinessService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formBusinessUpdate = this.formBuilder.group({
      name: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.AREA_NAME_MIN_LENGTH),
          Validators.maxLength(Parametries.AREA_NAME_MAX_LENGTH),]
      ],
      email: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.AREA_ANEXO_MIN_LENGTH),
          Validators.maxLength(Parametries.AREA_ANEXO_MAX_LENGTH),]
      ],
      ruc: [
        '', [
          Validators.required,
          Validators.minLength(Parametries.AREA_ANEXO_MIN_LENGTH),
          Validators.maxLength(Parametries.AREA_ANEXO_MAX_LENGTH)]
      ],
      state: [
        '', [
          Validators.required]
      ]
    });

    this.route.params.subscribe((params: {businessPk: number}) => {
      this.businessService.findBusinessById(params.businessPk, (result: any) => {

        this.business = result.data;
        this.formBusinessUpdate.patchValue({

          name: this.business.name,
          state: this.business.state,
          ruc: this.business.ruc,
          email: this.business.email
          
        });
      });
    });
  }




  onFormSubmit() {

    if (this.formBusinessUpdate.invalid) {

      return;
    }else {

      this.updateBusiness;
    }
  }



  private updateBusiness(){
    var business: Business = new Business();
    business.fromFormBusinessUpdate(this.formBusinessUpdate);
    this.businessService.updateBusiness(business.toBusinessUpdate(this.business.businessPK), (result: any) => {
      
      this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => {

        this.router.navigate(['business']);
      });
    });
  }

  get formGroup() { 

    return this.formBusinessUpdate.controls; 
  }

}
