import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addeventComponent } from './addevent.component';

describe('AddeventComponent', () => {
  let component: addeventComponent;
  let fixture: ComponentFixture<addeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
