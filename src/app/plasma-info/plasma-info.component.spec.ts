import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaInfoComponent } from './plasma-info.component';

describe('PlasmaInfoComponent', () => {
  let component: PlasmaInfoComponent;
  let fixture: ComponentFixture<PlasmaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasmaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
