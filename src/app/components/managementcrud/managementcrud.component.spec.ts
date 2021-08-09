import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcrudComponent } from './managementcrud.component';

describe('ManagementcrudComponent', () => {
  let component: ManagementcrudComponent;
  let fixture: ComponentFixture<ManagementcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
