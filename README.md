# The Password Game - Angular 12

![Password Game Logo](https://placehold.co/600x200?text=Password+Game)

## Descripción

**The Password Game** es un juego interactivo donde debes crear una contraseña que cumpla con una serie de reglas cada vez más desafiantes. Con cada regla cumplida, aparecerá una nueva más compleja, convirtiendo la experiencia en un reto divertido y adictivo.

## Características

- Interfaz de usuario interactiva construida con Angular 12 y Angular Material
- Validación en tiempo real de las reglas de contraseña
- Sistema progresivo de desafíos
- 12 niveles de dificultad creciente
- Animaciones y efectos visuales para una mejor experiencia de usuario

## Capturas de pantalla

![Pantalla de Inicio](https://placehold.co/600x400?text=Pantalla+de+Inicio)
![Juego en Progreso](https://placehold.co/600x400?text=Juego+en+Progreso)
![Pantalla de Victoria](https://placehold.co/600x400?text=Pantalla+de+Victoria)

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

3. Si estás usando Node.js v17 o superior, puedes necesitar usar el flag legacy provider:
   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

5. Abre tu navegador en `http://localhost:4200/`

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

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── game-container/
│   │   ├── password-input/
│   │   ├── rules-display/
│   │   └── game-progress/
│   ├── services/
│   │   └── game.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
└── styles.scss
```

## Cómo contribuir

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
5. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

Tu Nombre - [Tu Perfil de GitHub](https://github.com/tu-usuario)

## Agradecimientos

- Inspirado en la versión original de "The Password Game"
- Gracias a todos los colaboradores y probadores