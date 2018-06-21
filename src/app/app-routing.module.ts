import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ApplicantComponent } from './applicant/applicant.component';


const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
