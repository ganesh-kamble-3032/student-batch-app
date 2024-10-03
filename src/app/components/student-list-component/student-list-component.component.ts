import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  batch: string;

}
@Component({
  selector: 'app-student-list-component',
  templateUrl: './student-list-component.component.html',
  styleUrls: ['./student-list-component.component.css']
})
export class StudentListComponentComponent {

  students: Student[] = [
    { id: 1, name: 'Ganesh', batch: 'Batch A' },
    { id: 2, name: 'Prathmesh', batch: 'Batch B' },
    { id: 3, name: 'Tejas', batch: 'Batch A' }
  ];
}
