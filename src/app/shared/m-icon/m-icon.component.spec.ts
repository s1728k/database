import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MIconComponent } from './m-icon.component';

describe('MIconComponent', () => {
  let component: MIconComponent;
  let fixture: ComponentFixture<MIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
