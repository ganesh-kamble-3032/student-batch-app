import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Student {
  id: number;
  name: string;
  batch: string;
}
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  student: Student | undefined;

  private students: Student[] = [
    { id: 1, name: 'Ganesh', batch: 'Batch A' },
    { id: 2, name: 'Prathmesh', batch: 'Batch B' },
    { id: 3, name: 'Tejas', batch: 'Batch A' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.students.find(s => s.id === id);
  }
}
