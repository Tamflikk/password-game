import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Rule {
  id: number;
  description: string;
  validator: (password: string) => boolean;
  isActive: boolean;
  isFulfilled: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private password = new BehaviorSubject<string>('');
  private rules = new BehaviorSubject<Rule[]>([]);
  private activeRules = new BehaviorSubject<Rule[]>([]);
  private gameStarted = new BehaviorSubject<boolean>(false);
  private gameCompleted = new BehaviorSubject<boolean>(false);
  private currentLevel = new BehaviorSubject<number>(1);

  constructor() {
    this.initializeRules();
  }

  initializeRules(): void {
    const allRules: Rule[] = [
      {
        id: 1,
        description: 'La contraseña debe tener al menos 5 caracteres',
        validator: (password) => password.length >= 5,
        isActive: true,
        isFulfilled: false,
      },
      {
        id: 2,
        description: 'La contraseña debe incluir un número',
        validator: (password) => /\d/.test(password),
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 3,
        description: 'La contraseña debe incluir una letra mayúscula',
        validator: (password) => /[A-Z]/.test(password),
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 4,
        description:
          'La contraseña debe incluir un carácter especial (!@#$%^&*)',
        validator: (password) => /[!@#$%^&*]/.test(password),
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 5,
        description: 'La contraseña debe incluir los números que suman 25',
        validator: (password) => {
          const numbers = password.match(/\d/g);
          if (!numbers) return false;
          return numbers.reduce((sum, num) => sum + parseInt(num), 0) === 25;
        },
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 6,
        description: 'La contraseña debe incluir el nombre de un animal',
        validator: (password) => {
          const animals = [
            'perro',
            'gato',
            'leon',
            'tigre',
            'elefante',
            'jirafa',
            'mono',
            'oso',
            'lobo',
            'zorro',
            'aguila',
            'pez',
            'serpiente',
            'tortuga',
            'delfin',
            'tiburon',
            'ballena',
            'loro',
            'panda',
            'koala',
          ];
          return animals.some((animal) =>
            password.toLowerCase().includes(animal)
          );
        },
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 7,
        description: 'La contraseña debe incluir un emoji 😊',
        validator: (password) => /[\u{1F300}-\u{1F6FF}]/u.test(password),
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 8,
        description: 'La contraseña debe incluir la solución a: 15 * 3 - 7',
        validator: (password) => password.includes('38'),
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 9,
        description:
          'La contraseña debe incluir los colores rojo, verde y azul en cualquier idioma',
        validator: (password) => {
          const colors = {
            red: ['rojo', 'red', 'rouge', 'rot', 'rosso'],
            green: ['verde', 'green', 'vert', 'grün', 'verde'],
            blue: ['azul', 'blue', 'bleu', 'blau', 'blu'],
          };

          const lowerPassword = password.toLowerCase();
          return Object.values(colors).every((colorVariants) =>
            colorVariants.some((variant) => lowerPassword.includes(variant))
          );
        },
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 10,
        description:
          'La contraseña debe incluir un palíndromo de al menos 3 caracteres',
        validator: (password) => {
          for (let i = 0; i < password.length - 2; i++) {
            for (let j = i + 2; j < password.length; j++) {
              const substr = password.substring(i, j + 1);
              const reversed = substr.split('').reverse().join('');
              if (substr === reversed) return true;
            }
          }
          return false;
        },
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 11,
        description:
          'La contraseña debe contener una secuencia romana (I, V, X, L, C, D, M) que represente un número mayor a 50',
        validator: (password) => {
          const romanRegex = /[IVXLCDM]+/g;
          const matches = password.match(romanRegex);

          if (!matches) return false;

          const convertRomanToNumber = (roman: string): number => {
            const values: { [key: string]: number } = {
              I: 1,
              V: 5,
              X: 10,
              L: 50,
              C: 100,
              D: 500,
              M: 1000,
            };

            let result = 0;
            for (let i = 0; i < roman.length; i++) {
              const current = values[roman[i]];
              const next = i + 1 < roman.length ? values[roman[i + 1]] : 0;

              if (current < next) {
                result += next - current;
                i++;
              } else {
                result += current;
              }
            }
            return result;
          };

          return matches.some((match) => convertRomanToNumber(match) > 50);
        },
        isActive: false,
        isFulfilled: false,
      },
      {
        id: 12,
        description:
          'La contraseña debe contener la palabra "password" escrita al revés',
        validator: (password) => password.includes('drowssap'),
        isActive: false,
        isFulfilled: false,
      },
    ];

    this.rules.next(allRules);
    this.updateActiveRules();
  }

  startGame(): void {
    this.gameStarted.next(true);
    this.updateActiveRules();
  }

  getPassword(): Observable<string> {
    return this.password.asObservable();
  }

  setPassword(password: string): void {
    this.password.next(password);
    this.checkRules();
  }

  getActiveRules(): Observable<Rule[]> {
    return this.activeRules.asObservable();
  }

  getAllRules(): Observable<Rule[]> {
    return this.rules.asObservable();
  }

  getGameStarted(): Observable<boolean> {
    return this.gameStarted.asObservable();
  }

  getGameCompleted(): Observable<boolean> {
    return this.gameCompleted.asObservable();
  }

  getCurrentLevel(): Observable<number> {
    return this.currentLevel.asObservable();
  }

  private checkRules(): void {
    const password = this.password.getValue();
    const rules = this.rules.getValue();
    let allActiveFulfilled = true;
    let updatedRules = false;
  
    // Check each rule
    rules.forEach(rule => {
      if (rule.isActive) {
        const fulfilled = rule.validator(password);
        if (rule.isFulfilled !== fulfilled) {
          rule.isFulfilled = fulfilled;
          updatedRules = true;
        }
        
        if (!fulfilled) {
          allActiveFulfilled = false;
        }
      }
    });
  
    if (updatedRules) {
      this.rules.next([...rules]);
    }
  
    // Si todas las reglas activas están cumplidas, activar la siguiente
    if (allActiveFulfilled && this.gameStarted.getValue()) {
      const nextRuleIndex = rules.findIndex(r => !r.isActive);
      if (nextRuleIndex !== -1) {
        // Activar la siguiente regla
        rules[nextRuleIndex].isActive = true;
        // Verificar inmediatamente si la nueva regla ya se cumple
        rules[nextRuleIndex].isFulfilled = rules[nextRuleIndex].validator(password);
        this.rules.next([...rules]);
        this.currentLevel.next(nextRuleIndex + 1);
        this.updateActiveRules();
        
        if (rules[nextRuleIndex].isFulfilled) {
          setTimeout(() => this.checkRules(), 10);
        }
      } else {
        this.gameCompleted.next(true);
      }
    }
  
    this.updateActiveRules();
  }
  
  private updateActiveRules(): void {
    const rules = this.rules.getValue();
    const activeRules = rules.filter(rule => rule.isActive);
    this.activeRules.next(activeRules);
  }

  resetGame(): void {
    this.password.next('');
    this.gameStarted.next(false);
    this.gameCompleted.next(false);
    this.currentLevel.next(1);
    this.initializeRules();
  }
}
