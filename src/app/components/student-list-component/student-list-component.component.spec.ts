import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponentComponent } from './student-list-component.component';

describe('StudentListComponentComponent', () => {
  let component: StudentListComponentComponent;
  let fixture: ComponentFixture<StudentListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponentComponent]
    });
    fixture = TestBed.createComponent(StudentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
