import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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
import { AreaService } from '@app/service/area.service';
import { SupervisorService } from '@app/service/supervisor.service';
import { OfficerService } from '@app/service/officer.service';
import { EmployService } from '@app/service/employ.service';
import { ReqOfficer } from '@app/request/req-officer';
import { ReqSupervisor } from '@app/request/req-supervisor';
import { EnumRole } from '@app/enumeration/enum-role.enum';
import { RoleService } from '@app/service/role.service';
import { ReqExcluid } from '@app/request/req-excluid';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { EnumState } from '@app/enumeration/enum-state.enum';
import { Parametries } from '@app/config/parametries';
import { AdministradorService } from '@app/service/administrador.service';
import { BusinessService } from '@app/service/business.service';
import { ReqAdministrador } from '@app/request/req-administrardor';
import { Administrador } from '@app/model/administrador';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  
  
  formUpdateAdminBusinessEmploy: FormGroup;
  checkedConfiguration : boolean = true;
  checkedExcluded: boolean = true;
  hide = true;
  hideConfirm = true;
  tracedata;

  administrador;
  business;
  roles;
  
  private listeners: Array<Subscription>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,

    private apiService: ApiService,
    private officerService: OfficerService,
    private administradorService: AdministradorService,
    private layerMsgService: LayermsgService,
    private businessService : BusinessService,

    private route: ActivatedRoute,
    private router: Router
  ) {

    this.officerService.excluidsStatic.splice(0);
    this.listeners = new Array<Subscription>();
  }

  ngOnInit() {
  
    this.roles = [EnumRole.ADMINISTRATOR.toRole()];
    
    
    this.loadAllBusiness();

    this.formUpdateAdminBusinessEmploy = this.formBuilder.group({
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


    this.route.params.subscribe((params: {employPk: number}) => {

      this.administradorService.findAdminById( params.employPk, (result: any) =>{ 

        

        this.administrador = result.data;

        this.formUpdateAdminBusinessEmploy.patchValue({

          name: this.administrador.name,
          apePat: this.administrador.apePat,
          apeMat: this.administrador.apeMat,
          email: this.administrador.email,
          mobile: this.administrador.mobile,
          sex:  this.administrador.sex,
          password: this.administrador.password,
          confirmPassword: this.administrador.confirmPassword,
          roleFk:this.administrador.roleFk,
          businessFK:this.administrador.businessFK
        });
        
      });
    });

  }





  showPassword(e: any, field: string): void {
    e.preventDefault();
    if (field === 'hide') this.hide = !this.hide;
    if (field === 'hideConfirm') this.hideConfirm = !this.hideConfirm;
  }

  get formGroup() {
    return this.formUpdateAdminBusinessEmploy.controls
  }


  loadAllBusiness() {
    this.apiService.post('/business/v1/loadAllBusinessByRole', {
    }, (result: any) => {
      this.business = result.data;
    });
  }

 

  //METODO QUE AÑADE ADMINISTRADOR EMPRESARIAL --- CORREGIR  IF ELSE EN CASO SE SELECIONE ROL FUNCIONARIO
 

  onFormSubmit() {
    if (this.formUpdateAdminBusinessEmploy.invalid) {
      
      return;
    } else {
      this.updateAdministrador();
    }
  }


  private updateAdministrador(){

    let administrador:  Administrador = new Administrador();

    administrador.fromFormAdminUpdate(this.formUpdateAdminBusinessEmploy);

    this.administradorService.updateAdmin(administrador.toAdminUpdate(this.administrador.employPk), (result: any) => {
      
      this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => {

        this.router.navigate(['employee']);
      });
    });
  }


 
}


