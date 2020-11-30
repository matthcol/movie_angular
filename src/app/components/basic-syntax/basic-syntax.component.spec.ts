import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSyntaxComponent } from './basic-syntax.component';

describe('BasicSyntaxComponent', () => {
  let component: BasicSyntaxComponent;
  let fixture: ComponentFixture<BasicSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
