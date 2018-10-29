import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFormComponent } from './large-form.component';

describe('LargeFormComponent', () => {
  let component: LargeFormComponent;
  let fixture: ComponentFixture<LargeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
