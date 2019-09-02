import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngmechanicsComponent } from './engmechanics.component';

describe('EngmechanicsComponent', () => {
  let component: EngmechanicsComponent;
  let fixture: ComponentFixture<EngmechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngmechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngmechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
