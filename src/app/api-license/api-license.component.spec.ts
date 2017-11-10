import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLicenseComponent } from './api-license.component';

describe('ApiLicenseComponent', () => {
  let component: ApiLicenseComponent;
  let fixture: ComponentFixture<ApiLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
