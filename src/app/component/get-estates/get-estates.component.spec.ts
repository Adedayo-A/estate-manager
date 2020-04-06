import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEstatesComponent } from './get-estates.component';

describe('GetEstatesComponent', () => {
  let component: GetEstatesComponent;
  let fixture: ComponentFixture<GetEstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
