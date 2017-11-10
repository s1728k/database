import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunilkumarComponent } from './sunilkumar.component';

describe('SunilkumarComponent', () => {
  let component: SunilkumarComponent;
  let fixture: ComponentFixture<SunilkumarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunilkumarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunilkumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
