import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MustMatch } from '@app/utils/must-match.validator';
import { MatSort } from '@angular/material/sort';
import { Observable, from, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '@app/config/api.service';
import { LayermsgService } from '@app/config/layermsg.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '@app/model/role';
import { Employee } from '@app/model/employee';
import { Supervisor } from '@app/model/supervisor';
import { EmployeeAddModalComponent } from '../employee-add-modal/employee-add-modal.component';
import { GlobalVariable } from '@app/config/global';
import { AppValidator } from '@app/config/app-validator';
import { OfficerService } from '@app/service/officer.service';
import { SupervisorService } from '@app/service/supervisor.service';
import { RoleService } from '@app/service/role.service';
import { EnumRole } from '@app/enumeration/enum-role.enum';
import { ReqExcluid } from '@app/request/req-excluid';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { Parametries } from '@app/config/parametries';
import Swal from 'sweetalert2';
import { AdministradorService } from '@app/service/administrador.service';
import { ReqAdministrador } from '@app/request/req-administrardor';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit, OnDestroy {

  formEmployAdd: FormGroup;
  checkedConfiguration: boolean = true;
  hide = true;
  hideConfirm = true;
  traceData;
  

  business;
  supervisors;


  roles: Array<Role>;
  private listeners: Array<Subscription>;
  

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private officerService: OfficerService,
    private administradorService: AdministradorService,
    private layerMsgService: LayermsgService,

    private router: Router
  ) {

    this.officerService.excluidsStatic.splice(0);
    this.listeners = new Array<Subscription>();
  }

  ngOnInit() {
   
    this.roles = [EnumRole.ADMINISTRATOR.toRole()];
    
    
    this.loadAllBusiness();

    this.formEmployAdd = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(Parametries.NAME_PAT_MAT_MIN_LENGTH),
        Validators.maxLength(Parametries.NAME_MAX_LENGTH),
        Validators.pattern(Parametries.EMPLOYEE_ONLY_NUMBER_AND_CADENA)]],
      apePat: ['', [
        Validators.required,
        Validators.minLength(Parametries.NAME_PAT_MAT_MIN_LENGTH),
        Validators.maxLength(Parametries.APE_PAT_MAX_LENGTH),
        Validators.pattern(Parametries.EMPLOYEE_ONLY_NUMBER_AND_CADENA)]],
      apeMat: ['', [
        Validators.required,
        Validators.minLength(Parametries.NAME_PAT_MAT_MIN_LENGTH),
        Validators.maxLength(Parametries.APE_MAT_MAX_LENGTH),
        Validators.pattern(Parametries.EMPLOYEE_ONLY_NUMBER_AND_CADENA)]],
      email: ['', [
        Validators.required,
        Validators.maxLength(Parametries.EMAIL_MAX_LENGTH),
        Validators.email]],
      mobile: ['', [
        Validators.required,
        Validators.minLength(Parametries.MOBILE_MIN_LENGTH),
        Validators.maxLength(Parametries.MOBILE_MAX_LENGTH),
        Validators.pattern(Parametries.PATTERN_NUMBER)]],
      sex: ['', [
        Validators.required]],
      password: ['', [
        Validators.required,
        Validators.pattern(Parametries.PATTERN_PASSWORD)]],
      confirmPassword: ['', [
        Validators.required]],
      roleFk: ['',
        Validators.required],
      businessFK: ['', [
        Validators.required]],

    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get listAllExcluid() {
    return this.formEmployAdd.get('listAddExcluidRequest') as FormArray;

  }

  agregarExcluid() {
    if (this.listAllExcluid.valid) {
      this.listAllExcluid.push(
        this.formBuilder.group(
          {
            alias: ['', [Validators.required]],
            mobile: ['', [
              Validators.required,
              Validators.minLength(Parametries.MOBILE_MIN_LENGTH),
              Validators.maxLength(Parametries.MOBILE_MAX_LENGTH),
              Validators.pattern(Parametries.PATTERN_NUMBER)]]
          }
        )
      );
    }
  }
  deleteExcluidField(index: number){
    this.listAllExcluid.removeAt(index);
  }

  ngOnDestroy() {
    this.listeners.forEach((listener: Subscription) => {
      listener.unsubscribe();
    });
  }

  setUserCategoryValidators() {
    const employFk = this.formEmployAdd.get('employFk');
    this.formEmployAdd.get('roleFk').valueChanges
      .subscribe(roleFk => {

        if (roleFk === 3) employFk.setValidators(Validators.required);
        if (roleFk === 2) employFk.setValidators(null);
        employFk.updateValueAndValidity();

      });
  }

  showPassword(e: any, field: string): void {
    e.preventDefault();
    if (field === 'hide') this.hide = !this.hide;
    if (field === 'hideConfirm') this.hideConfirm = !this.hideConfirm;
  }

  get formGroup() {
    return this.formEmployAdd.controls
  }


  loadAllBusiness() {
    this.apiService.post('/business/v1/loadAllBusinessByRole', {
    }, (result: any) => {
      this.business = result.data;
    });
  }

 

  //METODO QUE AÑADE ADMINISTRADOR EMPRESARIAL --- CORREGIR  IF ELSE EN CASO SE SELECIONE ROL FUNCIONARIO

  private addEmploy() {
    console.log(this.formEmployAdd);
    let employee: Employee = new Employee();
    employee.fromFormEmploy(this.formEmployAdd);

    if (this.formGroup.roleFk.value === EnumRole.ADMINISTRATOR.code) {

      this.administradorService.addAdministrador(employee.toAdministrador(), (result: any) => {
        this.layerMsgService.showMessageOk(EnumStatus.SAVE_OK.code, () => {
          this.router.navigate(['employee']);
        });
      });
    }
  }

  onFormSubmit() {
    if (this.formEmployAdd.invalid) {
      return;
    } else {
      this.addEmploy();
    }
  }
}

