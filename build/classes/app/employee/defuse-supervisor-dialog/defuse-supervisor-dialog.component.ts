import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-defuse-supervisor-dialog',
  templateUrl: './defuse-supervisor-dialog.component.html',
  styleUrls: ['./defuse-supervisor-dialog.component.sass']
})
export class DefuseSupervisorDialogComponent implements OnInit {

  formDefuseSupervisor : FormGroup;
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.formDefuseSupervisor = this.formBuilder.group({
      superEmployPK:['',Validators.required],
      employPK : ['']
    })
  }

  onFormModalSubmit() {

    if (this.formDefuseSupervisor.invalid) {

      return;
    } else {

      this.defuseSupervisor();
    }
  }

  defuseSupervisor(){
    
  }
}
