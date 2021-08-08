import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredcarComponent } from './filteredcar.component';

describe('FilteredcarComponent', () => {
  let component: FilteredcarComponent;
  let fixture: ComponentFixture<FilteredcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
