# The Password Game - Angular 12

## Descripción

**The Password Game** es un juego interactivo donde debes crear una contraseña que cumpla con una serie de reglas cada vez más desafiantes. Con cada regla cumplida, aparecerá una nueva más compleja, convirtiendo la experiencia en un reto divertido y adictivo.

## Características

- Interfaz de usuario interactiva construida con Angular 12 y Angular Material
- Validación en tiempo real de las reglas de contraseña
- Sistema progresivo de desafíos
- 12 niveles de dificultad creciente
- Animaciones y efectos visuales para una mejor experiencia de usuario

## Reglas del juego

El juego presenta reglas progresivas para tu contraseña:

1. La contraseña debe tener al menos 5 caracteres
2. La contraseña debe incluir un número
3. La contraseña debe incluir una letra mayúscula
4. La contraseña debe incluir un carácter especial (!@#$%^&*)
5. La contraseña debe incluir números que sumen 25
6. La contraseña debe incluir el nombre de un animal
7. La contraseña debe incluir un emoji 😊
8. La contraseña debe incluir la solución a: 15 * 3 - 7
9. La contraseña debe incluir los colores rojo, verde y azul en cualquier idioma
10. La contraseña debe incluir un palíndromo de al menos 3 caracteres
11. La contraseña debe contener una secuencia romana (I, V, X, L, C, D, M) que represente un número mayor a 50
12. La contraseña debe contener la palabra "password" escrita al revés

## Instalación

### Prerrequisitos

- Node.js (v14.x o v16.x recomendado)
- Angular CLI v12.x

### Pasos para instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/password-game.git
   cd password-game
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

4. Abre tu navegador en `http://localhost:4200/`

## Construcción para producción

```bash
ng build --prod
```

El resultado se generará en el directorio `dist/`.

## Tecnologías utilizadas

- Angular 12.x
- Angular Material
- SCSS
- RxJS
- TypeScript

## Autor

Alejandro Tamayo Hornsby - [Tamflikk](https://github.com/tamflikk)
