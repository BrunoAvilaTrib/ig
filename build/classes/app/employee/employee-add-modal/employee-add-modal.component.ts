import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '@app/config/api.service';
import { OfficerService } from '@app/service/officer.service';
import { ReqExcluid } from '@app/request/req-excluid';
import { Parametries } from '@app/config/parametries';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add-modal',
  templateUrl: './employee-add-modal.component.html',
  styleUrls: ['./employee-add-modal.component.scss']
})
export class EmployeeAddModalComponent implements OnInit {

  formExcluid: FormGroup;
  excluids: ReqExcluid[] = [];
  excluded: ReqExcluid;
  excluidsTem: ReqExcluid[] = [];

  constructor(
    public dialogRef: MatDialogRef<EmployeeAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReqExcluid,
    private officerService: OfficerService, 
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.formExcluid = this.formBuilder.group({
      idExcluid: [this.data.idExcluid, []],
      alias: [this.data.alias, [
        Validators.required,
        Validators.minLength(Parametries.ALIAS_MIN_LENGTH),
        Validators.maxLength(Parametries.ALIAS_MAX_LENGTH),
        Validators.pattern(Parametries.PATTERN_ALL_CADENA)
      ]],
      mobile: [this.data.mobile, [
        Validators.required,
        Validators.minLength(Parametries.MOBILE_MIN_LENGTH),
        Validators.maxLength(Parametries.MOBILE_MAX_LENGTH),
        Validators.pattern(Parametries.PATTERN_NUMBER)
      ]]
    });
  }

  onNoClick(): void {

    this.dialogRef.close();
  }

  get formGroup() {

    return this.formExcluid.controls;
  }

  onFormModalSubmit() {

    if (this.formExcluid.invalid) {

      return;
    } else {

      this.saveExcluded();
    }
  }

  validateMobile(mobile: string) {

    let size = this.officerService.excluidsStatic.length;

    if(size == 0){

      return false;
    }else{

      if(this.data.idExcluid == undefined){
        
        for(let i = 0 ; i < size ; i++){

          if(this.officerService.excluidsStatic[i].mobile == mobile){

            return true;
          }
        }
      }else{

        for(let i = 0 ; i < size ; i++){

          if(
            this.officerService.excluidsStatic[i].mobile == mobile && 
            this.officerService.excluidsStatic[i].idExcluid != this.data.idExcluid
          ){

            return true;
          }
        }
      }
    }

    return false;
  }

  saveExcluded() {

    let mobile = this.formExcluid.value.mobile;

    if (this.validateMobile(mobile)) {

      Swal.fire({
        title: 'Error al guardar',
        text: 'Existe un excluido con el mismo número mobil.',
        icon: 'error',
        confirmButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cerrar</span><img src="./../../../assets/icons/x-circle.svg"></div>',
        confirmButtonColor :"#EF2A24"
      });
    } else {

      var excluid: ReqExcluid = new ReqExcluid();

      excluid.alias = this.formExcluid.value.alias;
      excluid.mobile = this.formExcluid.value.mobile;

      if(this.data.idExcluid == undefined){

        excluid.idExcluid = this.officerService.excluidsStatic.length;
        this.officerService.excluidsStatic.push(excluid);
      }else{

        excluid.idExcluid = this.data.idExcluid;

        for(let i = 0 ; i < this.officerService.excluidsStatic.length; i++){

          if(this.officerService.excluidsStatic[i].idExcluid == this.data.idExcluid){

            this.officerService.excluidsStatic[i] = excluid;
          }
        }
      }
      
      this.officerService.excluids.next(this.officerService.excluidsStatic);
      this.dialogRef.close();
    }
  }
}
