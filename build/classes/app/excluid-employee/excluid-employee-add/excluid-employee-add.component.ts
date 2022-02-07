import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from '@app/config/api.service';
import { Router } from '@angular/router';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { LayermsgService } from '@app/config/layermsg.service';

@Component({
  selector: 'app-excluid-employee-add',
  templateUrl: './excluid-employee-add.component.html',
  styleUrls: ['./excluid-employee-add.component.scss']
})
export class ExcluidEmployeeAddComponent implements OnInit {
  formExcluidEmployeeAdd: FormGroup;
  areas;
  employees;
  constructor(
    private layerMsgService: LayermsgService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadAllAreas();
    this.formExcluidEmployeeAdd =this.formBuilder.group({
      areaFk:['',[]],
      employFk:['',Validators.required],
      startDate:['', Validators.required],
      endDate:['',Validators.required]
    })
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
    return this.formExcluidEmployeeAdd.controls
  }

  addExcluidEmployee(){
    console.log(this.formExcluidEmployeeAdd.value )
    let excluidEmployee = this.formExcluidEmployeeAdd.value
    this.apiService.post('/excluidEmploy/v1/addExcluidEmploy', {
      startDate: excluidEmployee.startDate.toLocaleDateString().toString(),
      endDate: excluidEmployee.endDate.toLocaleDateString().toString(),
      employFk: excluidEmployee.employFk
    }, (result: any) => {
      this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => { this.router.navigate(['excluidemployee'])  });
    });

  }

  onFormSubmit() {
    if (this.formExcluidEmployeeAdd.invalid) {
      return;
    } else {
      this.addExcluidEmployee();
    }
  }
}
