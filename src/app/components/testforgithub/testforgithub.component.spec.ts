import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestforgithubComponent } from './testforgithub.component';

describe('TestforgithubComponent', () => {
  let component: TestforgithubComponent;
  let fixture: ComponentFixture<TestforgithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestforgithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestforgithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
