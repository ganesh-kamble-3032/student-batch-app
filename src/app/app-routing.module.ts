import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponentComponent } from './components/student-list-component/student-list-component.component';
import { BatchListComponentComponent } from './components/batch-list-component/batch-list-component.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes: Routes = [

  { path: '', component: HomeComponentComponent },
  { path: 'students', component: StudentListComponentComponent },
  { path: 'batches', component: BatchListComponentComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'batches/:id', component: BatchListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
