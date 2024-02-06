import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceEntryComponent } from './workspace-entry.component';

describe('WorkspaceEntryComponent', () => {
  let component: WorkspaceEntryComponent;
  let fixture: ComponentFixture<WorkspaceEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkspaceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
