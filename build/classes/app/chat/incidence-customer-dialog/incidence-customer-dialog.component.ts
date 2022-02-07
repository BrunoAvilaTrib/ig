import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidence-customer-dialog',
  templateUrl: './incidence-customer-dialog.component.html',
  styleUrls: ['./incidence-customer-dialog.component.scss']
})
export class IncidenceCustomerDialogComponent implements OnInit {

  areas: any[];
  employees: any[];
  formIncidenceCustomer: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<IncidenceCustomerDialogComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.formIncidenceCustomer = this.formBuilder.group({
      areaFk:['',[Validators.required]],
      employFk:['',[Validators.required]]

    })
    this.loadAllAreas();

  }
  loadAllAreas(){
    this.areas = [{
      areaPk:1,
      areaName:"Sitemas"
    },
    {
      areaPk:2,
      areaName:"Informes"
    }
  ]
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
