import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPasswordChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.passwordChange.emit(this.password);
  }
}