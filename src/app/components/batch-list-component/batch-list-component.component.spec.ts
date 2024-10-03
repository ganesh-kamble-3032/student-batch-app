import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchListComponentComponent } from './batch-list-component.component';

describe('BatchListComponentComponent', () => {
  let component: BatchListComponentComponent;
  let fixture: ComponentFixture<BatchListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchListComponentComponent]
    });
    fixture = TestBed.createComponent(BatchListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
