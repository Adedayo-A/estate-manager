import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormroadComponent } from './formroad.component';

describe('FormroadComponent', () => {
  let component: FormroadComponent;
  let fixture: ComponentFixture<FormroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
