import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEEComponent } from './bee.component';

describe('BEEComponent', () => {
  let component: BEEComponent;
  let fixture: ComponentFixture<BEEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
