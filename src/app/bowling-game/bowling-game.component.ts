import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling-game',
  templateUrl: 'bowling-game.component.html'
})
export class BowlingGameComponent {
  rolls = [] as number[];
  currentRoll = 0;
  
  constructor() {}

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
        console.log(frameIndex);
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }

  roll(pins: number) {
    this.rolls = [...this.rolls, pins];
  }

  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      this.currentRoll++;
      this.roll(pins);
    }
  }
}
