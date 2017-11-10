import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CblmsHomeComponent } from './cblms-home.component';

describe('CblmsHomeComponent', () => {
  let component: CblmsHomeComponent;
  let fixture: ComponentFixture<CblmsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CblmsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CblmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
