import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.scss']
})
export class GameProgressComponent implements OnInit {
  @Input() currentLevel: number = 1;
  @Input() totalLevels: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  getProgressPercentage(): number {
    return (this.currentLevel / this.totalLevels) * 100;
  }
}