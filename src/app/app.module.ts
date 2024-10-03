import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { StudentListComponentComponent } from './components/student-list-component/student-list-component.component';
import { BatchListComponentComponent } from './components/batch-list-component/batch-list-component.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { BatchDetailComponent } from './components/batch-detail/batch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    StudentListComponentComponent,
    BatchListComponentComponent,
    StudentDetailComponent,
    BatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
