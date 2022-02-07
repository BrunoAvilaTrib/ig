import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SearchComponent } from './chat/search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { TraceComponent } from './trace/trace.component';
import { AreaComponent } from './area/area.component';
import { AreaAddComponent } from './area/area-add/area-add.component';
import { AreaUpdateComponent } from './area/area-update/area-update.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { AdminUpdateComponent } from './employee/admin-update/admin-update.component';
import { BusinessComponent } from '@app/business/business.component';
import { BusinessAddComponent } from '@app/business/business-add/business-add.component';
import { BusinessUpdateComponent } from '@app/business/business-update/business-update.component';
import { ExcluidEmployeeComponent } from '@app/excluid-employee/excluid-employee.component';
import { ExcluidCustomerComponent } from '@app/excluid-customer/excluid-customer.component';
import { ExcluidEmployeeAddComponent } from '@app/excluid-employee/excluid-employee-add/excluid-employee-add.component';
import { ExcluidEmployeeUpdateComponent } from '@app/excluid-employee/excluid-employee-update/excluid-employee-update.component';
import { ReassignChatsComponent } from '@app/reassign-chats/reassign-chats.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { SupervisorAddComponent } from './employee/supervisor-add/supervisor-add.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recover-password', component: RecoverPasswordComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
    { path: 'employee/create', component: EmployeeAddComponent, canActivate: [AuthGuard] },
    { path: 'employee/update', component: EmployeeUpdateComponent, canActivate: [AuthGuard] },
    { path: 'supervisor/create', component: SupervisorAddComponent , canActivate: [AuthGuard] },
    { path: 'admin/update', component: AdminUpdateComponent, canActivate: [AuthGuard] },
    { path: 'chat', component: ChatComponent,canActivate: [AuthGuard]},
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'business', component: BusinessComponent, canActivate: [AuthGuard] },
    { path: 'business/create', component: BusinessAddComponent, canActivate: [AuthGuard] },
    { path: 'business/update', component: BusinessUpdateComponent, canActivate: [AuthGuard] },
    { path: 'trace', component: TraceComponent, canActivate: [AuthGuard]},
    { path: 'excluidemployee', component: ExcluidEmployeeComponent, canActivate: [AuthGuard]},
    { path: 'excluidemployee/create', component: ExcluidEmployeeAddComponent, canActivate: [AuthGuard]},
    { path: 'excluidemployee/update', component: ExcluidEmployeeUpdateComponent, canActivate: [AuthGuard]},
    { path: 'excluidcustomer', component: ExcluidCustomerComponent, canActivate: [AuthGuard]},
    { path: 'area', component: AreaComponent, canActivate: [AuthGuard]},
    { path: 'area/create', component: AreaAddComponent, canActivate: [AuthGuard]},
    { path: 'area/update', component: AreaUpdateComponent, canActivate: [AuthGuard]},
    { path: 'reassignments', component: ReassignChatsComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
