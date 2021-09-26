import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnit',()=>{
it('should start with this.tasks',()=>{

  //const gTasksSpy = jest.spyOn( component.getTasks, 'getTasks');
} )
  });
});
