import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/config/api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { LayermsgService } from '@app/config/layermsg.service';
import { EnumStatus } from '@app/enumeration/enum-status.enum';

@Component({
  selector: 'app-excluid-employee-update',
  templateUrl: './excluid-employee-update.component.html',
  styleUrls: ['./excluid-employee-update.component.scss']
})
export class ExcluidEmployeeUpdateComponent implements OnInit {

  formExcluidEmployeeUpdate: FormGroup;
  excluidEmployee;
  employees;
  date1=new Date(2020,5,4);
  areas;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private layerMsgService: LayermsgService
  ) { }

  ngOnInit() {
    this.formExcluidEmployeeUpdate = this.formBuilder.group({
      areaFk: ['', []],
      employFk: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })

    this.loadAllAreas();
    this.recoverData();
  }


  recoverData() {
    this.route.params.subscribe((params: {
      excluidEmployPK: number
    }) => {

      this.apiService.post('/excluidEmploy/v1/loadExcluidEmploy', {
        excluidEmployPK: params.excluidEmployPK
      }, (result: any) => {

        this.excluidEmployee = result.data;
        this.apiService.post('/employ/v1/loadAllEmployByArea', {
          areaPk: this.excluidEmployee.areaFK
        }, (result: any) => {
          this.employees = result.data;
        });

        this.formExcluidEmployeeUpdate.patchValue({

          areaFk: this.excluidEmployee.areaFK,
          employFk: this.excluidEmployee.employFK,
          startDate: this.convertToDateClass(this.excluidEmployee.startDate),
          endDate: this.convertToDateClass(this.excluidEmployee.endDate)
        })

      });

    });
  }

  convertToDateClass(dateString:String){
    let dateTemp = dateString.split('-');
    return new Date( parseInt(dateTemp[2]) , parseInt(dateTemp[1]) ,parseInt(dateTemp[0]) );
  }

  loadAllAreas(){
    this.apiService.post('/area/v1/loadAllAreaByRole', {
    }, (result: any) => {
      this.areas = result.data;
    });
  }

  loadAllEmployByArea(selectArea: NgForm){
    let areaFk = selectArea.value;
    this.apiService.post('/employ/v1/loadAllEmployByArea', {
      areaPk : areaFk
    }, (result: any) => {
      this.employees = result.data;
    });
  }

  get formGroup() {
    return this.formExcluidEmployeeUpdate.controls
  }

  updateExcluidEmploy(){
    let excluidEmploy = this.formExcluidEmployeeUpdate.value;
    console.log(excluidEmploy);
    this.apiService.post('/excluidEmploy/v1/updateExcluidEmploy',{
      excluidEmployPk: this.excluidEmployee.excluidEmployPK,
      employFk: excluidEmploy.employFk,
      startDate: excluidEmploy.startDate.toLocaleDateString().toString(),
      endDate: excluidEmploy.endDate.toLocaleDateString().toString()
    }, (result:any) =>{
      this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => { this.router.navigate(['excluidemployee'])  });
    })
  }

  onFormSubmit(){
    if(this.formExcluidEmployeeUpdate.invalid){
      return;
    }
    else{
      this.updateExcluidEmploy();
    }
  }
}


