import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListComponent } from './student-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  StudentsListComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListComponent ]
    })
    .compileComponents();

    const fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
