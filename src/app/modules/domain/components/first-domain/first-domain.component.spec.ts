import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDomainComponent } from './first-domain.component';

describe('FirstDomainComponent', () => {
  let component: FirstDomainComponent;
  let fixture: ComponentFixture<FirstDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
