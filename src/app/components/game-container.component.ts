import { Component, OnInit } from '@angular/core';
import { GameService, Rule } from '../services/game.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  password: string = '';
  activeRules$: Observable<Rule[]>;
  gameStarted$: Observable<boolean>;
  gameCompleted$: Observable<boolean>;
  currentLevel$: Observable<number>;

  constructor(private gameService: GameService) {
    this.activeRules$ = this.gameService.getActiveRules();
    this.gameStarted$ = this.gameService.getGameStarted();
    this.gameCompleted$ = this.gameService.getGameCompleted();
    this.currentLevel$ = this.gameService.getCurrentLevel();
  }

  ngOnInit(): void {
    this.gameService.getPassword().subscribe(password => {
      this.password = password;
    });
  }

  startGame(): void {
    this.gameService.startGame();
  }

  updatePassword(password: string): void {
    this.gameService.setPassword(password);
  }

  resetGame(): void {
    this.gameService.resetGame();
  }
}