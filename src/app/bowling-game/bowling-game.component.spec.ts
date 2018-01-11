// TODO: up to slide 46 anf the fourth test after making a spare
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BowlingGameComponent } from './bowling-game.component';

describe(`Bowling Game`, () => {
  let component: BowlingGameComponent;
  let fixture: ComponentFixture<BowlingGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BowlingGameComponent]
    });

    fixture = TestBed.createComponent(BowlingGameComponent);
    component = fixture.componentInstance;
  });

  it(`should have component instance`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have a score of 0 for a gutter game`, () => {
    component.rollMany(20, 0);
    expect(component.score()).toEqual(0);
  });

  it(`should have all ones`, () => {
    component.rollMany(20, 1);
    expect(component.score()).toEqual(20);
  });

  it(`should have a spare `, () => {
    rollSpare();
    component.roll(3);
    component.rollMany(17, 0);
    expect(component.score()).toEqual(16);
  });

  function rollSpare() {
    component.roll(5);
    component.roll(5);
  }
});
