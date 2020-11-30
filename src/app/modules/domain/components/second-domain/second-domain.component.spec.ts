import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDomainComponent } from './second-domain.component';

describe('SecondDomainComponent', () => {
  let component: SecondDomainComponent;
  let fixture: ComponentFixture<SecondDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
