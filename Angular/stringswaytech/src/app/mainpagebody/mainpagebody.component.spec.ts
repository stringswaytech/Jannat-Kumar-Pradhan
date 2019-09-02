import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagebodyComponent } from './mainpagebody.component';

describe('MainpagebodyComponent', () => {
  let component: MainpagebodyComponent;
  let fixture: ComponentFixture<MainpagebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
