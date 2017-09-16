import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling-game',
  templateUrl: './bowling-game.component.html',
  styles: [require('src/app/bowling-game/bowling-game.component.scss').toString()]
})
export class BowlingGameComponent {
  totalScore = 0;

  roll(pins: number): void {
    this.totalScore = this.totalScore + pins;
  }

  score(): number {
    return this.totalScore;
  }

  rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      this.roll(pins);
    }
  }


}
