import { Component } from "@angular/core";
import { FormGroup , FormBuilder, Validators  } from '@angular/forms';
import { Router} from '@angular/router';
import { LayermsgService } from '@app/config/layermsg.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { Area } from '@app/model/area';
import { AreaService } from '@app/service/area.service';
import { Parametries } from '@app/config/parametries';
import { ApiService } from '@app/config/api.service';

@Component({
  selector: 'ig-area-add',
  templateUrl: './area-add.component.html',
  styleUrls: ['./area-add.component.scss']
})

export class AreaAddComponent {
  
  formAreaAdd: FormGroup;

  constructor(
    private layerMsgService: LayermsgService,
    private areaService: AreaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService : ApiService
  ) {}
  
  ngOnInit() {

    this.formAreaAdd = this.formBuilder.group({
      areaName: [
        '', [
        Validators.required, 
        Validators.minLength(Parametries.AREA_NAME_MIN_LENGTH), 
        Validators.maxLength(Parametries.AREA_NAME_MAX_LENGTH), 
        Validators.pattern(Parametries.AREA_ONLY_NUMBER_AND_CADENA)]
      ],

      areaComment: [
        '', [
        Validators.required,
        Validators.minLength(Parametries.AREA_COMMENT_MIN_LENGTH ),
        Validators.maxLength(Parametries.AREA_COMMENT_MAX_LENGTH )]
      ],
      businessFK:[
        '',[]
      ]
    });
    this.setBusinessFK();
    
  }

  setBusinessFK(){
    this.apiService.post('/business/v1/loadAllBusinessByRole', {
    }, (result: any) => {
      this.formAreaAdd.patchValue({
        "businessFK": result.data[0].businessPK
      })
      console.log(this.formAreaAdd);
    });
  }

  private addArea(){

    var area: Area = new Area();
    area.fromFormAreaAdd(this.formAreaAdd);

    this.areaService.addArea(area.toAreaAdd(), (result: any) => {

      this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => {

        this.router.navigate(['area']);
      });
    });
  }

  onFormSubmit() {
    if (this.formAreaAdd.invalid) {
      console.log(this.formAreaAdd)
      // return;
    }else {
      console.log(this.formAreaAdd)
      this.addArea();
    }
  }

  get formGroup() {

    return this.formAreaAdd.controls; 
  }
}