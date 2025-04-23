import { Component, Input, OnInit } from '@angular/core';
import { Rule } from '../services/game.service';

@Component({
  selector: 'app-rules-display',
  templateUrl: './rules-display.component.html',
  styleUrls: ['./rules-display.component.scss']
})
export class RulesDisplayComponent implements OnInit {
  @Input() rules: Rule[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSortedRules(): Rule[] {
    return [...this.rules].sort((a, b) => {
      if (!a.isFulfilled && b.isFulfilled) return -1;
      if (a.isFulfilled && !b.isFulfilled) return 1;
      return 0;
    });
  }
}