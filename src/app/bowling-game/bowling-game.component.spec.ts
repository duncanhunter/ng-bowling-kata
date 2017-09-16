import { BowlingGameComponent } from './bowling-game.component';
import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

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

  it(`should return true`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have 0 score for a gutter game`, () => {
    rollMany(20, 0);
    expect(component.score()).toEqual(0);
  });

  it(`should return 20 for all 1's`, () => {
    rollMany(20, 1);

    expect(component.score()).toEqual(20);
  });

  fit(`should test one spare`, () => {
    rollSpare();
    component.roll(3);
    rollMany(17, 0);
    expect(component.score()).toEqual(16);
  });

  function rollMany(n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      component.roll(pins);
    }
  }

  function rollSpare() {
    component.roll(5);
    component.roll(5);
  }

});



// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { BowlingGameComponent } from './bowling-game.component';

// describe('BowlingGameComponent', () => {
//   let component: BowlingGameComponent;
//   let fixture: ComponentFixture<BowlingGameComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [BowlingGameComponent]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BowlingGameComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it(`should handle a gutter game`, () => {
//     rollMany(20, 0);

//     expect(component.score()).toEqual(0);
//   });

//   it(`should have 20 if roll all 1;s`, () => {
//     rollMany(20, 1);
//     expect(component.score()).toEqual(20);
//   });

// });
