import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingGameComponent } from './bowling-game.component';

describe('BowlingGameComponent', () => {
  let component: BowlingGameComponent;
  let fixture: ComponentFixture<BowlingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BowlingGameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should handle a gutter game`, () => {
    component.rollMany(20, 0);

    expect(component.score()).toEqual(0);
  });

  it(`should have 20 if roll all 1;s`, () => {
    component.rollMany(20, 1);
    expect(component.score()).toEqual(20);
  });

});

