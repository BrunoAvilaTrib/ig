import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
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
import { ReqOfficer } from '@app/request/req-officer';
import { ReqSupervisor } from '@app/request/req-supervisor';
import { EnumRole } from '@app/enumeration/enum-role.enum';
import { RoleService } from '@app/service/role.service';
import { ReqExcluid } from '@app/request/req-excluid';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { EnumState } from '@app/enumeration/enum-state.enum';
import { Parametries } from '@app/config/parametries';
import Swal from 'sweetalert2';
import { EmployService } from '@app/service/employ.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit, OnDestroy {

  formEmployUpdate: FormGroup;
  selectedRole: string = '';
  checkedConfiguration: boolean = true;
  checkedExcluded: boolean = true;
  hide = true;
  hideConfirm = true;
  filteredOptions: Observable<Supervisor[]>;
  dataSource: MatTableDataSource<ReqExcluid>;
  displayedColumns = ['alias', 'mobile', 'action'];

  traceData;
  areas;
  business;
  supervisores;

  roleTypeFormControl: FormControl = new FormControl('', Validators.required);

  // @Author elperez
  private listeners: Array<Subscription>;
  roles: Array<Role>;
  private employ: any; //ReqOfficer | ReqSupervisor;
  // ---------------


  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private areaService: AreaService,
    private supervisorService: SupervisorService,
    private officerService: OfficerService,
    private employService: EmployService,
    private roleService: RoleService,
    private layerMsgService: LayermsgService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.listeners = new Array<Subscription>();
  }

  ngOnInit() {

    this.listeners.push(this.roleService.subscribe((roles) => {
      this.roles = roles;
    }));

    this.roleService.loadRoles();
    this.loadAllArea();

    this.dataSource = new MatTableDataSource(this.officerService.excluidsStatic);
    this.dataSource.sort = this.sort;

    this.formEmployUpdate = this.formBuilder.group({
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
      password: ['', []],
      roleFk: ['', Validators.required],
      businessFK: ['', Validators.required],
      areaFk: ['', []],
      employFk: ['', []]
    }, 
    
    
    );

    this.listeners.push(this.route.params.subscribe((params: {
      employPk: number,
      role: string
    }) => {

      this.employService.loadEmploy(params.employPk, (result: any) => {
        console.log(result);
        this.employ = result.data;
        this.employ.listAllExcluid =[
          {
            mobile: 965455461,
            alias: "Jonatan"
          },
          {
            mobile: 978769977,
            alias: "Jose"
          }

        ]
        this.employ.employPk = params.employPk;


        // Cargar el listado de supervisores del Area a la que pertenece el empleado
        this.apiService.post('/employ/v1/loadAllSupervisorByArea', {
          areaPk: this.employ.areaFk
        }, (result: any) => {
          this.supervisores = result.data;
        });

        // Cargar el listado de empresas a la que pertenece el empleado
        this.apiService.post('/business/v1/loadAllBusiness', {}, (result: any) => {
          this.business = result.data;
        });


        let data: any = this.employ;
        this.formEmployUpdate.patchValue({
          'name': data.name,
          'apePat': data.apePat,
          'apeMat': data.apeMat,
          'email': data.email,
          'mobile': data.mobile,
          'sex': data.sex,
          'areaFk': data.areaFk,

          'roleFk': data.roleFk,
          'employFk': data.employFk,
          'businessFK': data.businessFK,

        })
        console.log(this.employ);
        console.log(this.formEmployUpdate);
      })

    })
    );
  }

  ngOnDestroy() {
    this.listeners.forEach((listener: Subscription) => {
      listener.unsubscribe();
    });
  }

  showPassword(e: any, field: string): void {
    e.preventDefault();
    if (field === 'hide') this.hide = !this.hide;
    if (field === 'hideConfirm') this.hideConfirm = !this.hideConfirm;
  }

  get listAllExcluid() {
    return this.formEmployUpdate.get('listAddExcluidRequest') as FormArray;

  }
  
  get formGroup() {
    return this.formEmployUpdate.controls
  }

  openDialog(excluid?: ReqExcluid) {

    let gen = excluid != null ? excluid : new ReqExcluid();

    const dialogRef = this.dialog.open(EmployeeAddModalComponent, {
      width: '300px',
      data: gen
    });
  }

  loadAllArea() {
    this.apiService.post('/area/v1/loadAllArea', {}, (result: any) => {
      this.areas = result.data;
    });
  }

  private updateEmploy() {

    var employee: Employee = new Employee();
    employee.fromFormEmploy(this.formEmployUpdate);
    employee.setEmployPk(this.employ.employPk);

    
    if (this.formGroup.roleFk.value === 2) {

      this.supervisorService.updateSupervisor(employee.toUpdateSupervisor(), (result: any) => {
        this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => {
          this.router.navigate(['employee']);
        });
      });
    } else {

      
      this.officerService.updateOfficer(employee.toUpdateOfficer(), (result: any) => {
        this.layerMsgService.showMessageOk(EnumStatus.UPDATE_OK.code, () => {
          this.router.navigate(['employee']);
        });
      });
    }
  }

  deleteExcluid(idExcluid: number) {

    Swal.fire({
      title: '¿Desea eliminar al excluido?',
      text: 'El excluido será eliminado de la lista.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: ' <div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Aceptar</span><img src="./../../../assets/icons/save.svg"></div>',
      confirmButtonColor: "#EF2A24",
      cancelButtonText: '<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;"><span>Cancelar</span><img src="./../../../assets/icons/x-circle.svg"></div>'
    }).then((result) => {

      if (result.value) {

        for (let i = 0; i < this.officerService.excluidsStatic.length; i++) {

          if (this.officerService.excluidsStatic[i].idExcluid == idExcluid) {

            this.officerService.excluidsStatic.splice(i, 1);
            this.dataSource = new MatTableDataSource(this.officerService.excluidsStatic);
            this.dataSource.sort = this.sort;
            break;
          }
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) { }
    })
  }

  loadAllSupervisorByArea(selectArea: NgForm) {
    let areaFk = selectArea.value;
    
    return this.apiService.post('/employ/v1/loadAllSupervisorByArea', {
      areaPk: areaFk
    }, (result: any) => {
      this.supervisores = result.data;
    });
  }

  onFormSubmit() {
    if (this.formEmployUpdate.invalid) {

      return;
    } else {

      this.updateEmploy();
    }
  }
}
