import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSmallComponent } from './listing-small.component';

describe('ListingSmallComponent', () => {
  let component: ListingSmallComponent;
  let fixture: ComponentFixture<ListingSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
