import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSdkComponent } from './cinema-sdk.component';

describe('CinemaSdkComponent', () => {
  let component: CinemaSdkComponent;
  let fixture: ComponentFixture<CinemaSdkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaSdkComponent]
    });
    fixture = TestBed.createComponent(CinemaSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
