import { Component } from "@angular/core";
import { FormGroup , FormBuilder, Validators  } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { LayermsgService } from '@app/config/layermsg.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { Area } from '@app/model/area';
import { AreaService } from '@app/service/area.service';
import { Parametries } from '@app/config/parametries';

@Component({
  selector: 'ig-area-update',
  templateUrl: './area-update.component.html',
  styleUrls: ['./area-update.component.scss']
})

export class AreaUpdateComponent {

  formAreaUpdate: FormGroup;
  private area : any;

  constructor(
    private layerMsgService: LayermsgService,
    private areaService: AreaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
  }
  
  ngOnInit() {

    this.formAreaUpdate = this.formBuilder.group({
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
        Validators.minLength(Parametries.AREA_ANEXO_MIN_LENGTH),
        Validators.maxLength(Parametries.AREA_ANEXO_MAX_LENGTH),
        Validators.pattern(Parametries.AREA_ONLY_NUMBER_AND_CADENA)]
      ],
      areaSupport: [
        '', [
        Validators.required]
      ]
    });

    this.route.params.subscribe((params: {
      
      areaPk: number
    }) => {
      this.areaService.findAreaById(params.areaPk, (result: any) => {

        this.area = result.data;
        this.formAreaUpdate.patchValue({

          areaName: this.area.name,
          areaComment: this.area.comment,
          state: this.area.support
        });
      });
    });
  }

  private updateArea(){

    var area: Area = new Area();
    area.fromFormAreaUpdate(this.formAreaUpdate);

    this.areaService.updateArea(area.toAreaUpdate(this.area.areaPk), (result: any) => {

      this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => {

        this.router.navigate(['area']);
      });
    });
  }

  onFormSubmit() {

    if (this.formAreaUpdate.invalid) {

      return;
    }else {

      this.updateArea();
    }
  }

  get formGroup() { 

    return this.formAreaUpdate.controls; 
  }
}