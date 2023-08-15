# GUESS THE COLOR

![image](./.github/initial.gif)

### How does the game work?

The game consists of trying to match as many colors as possible within 30 seconds. When the game starts, a random color will appear, and 3 answer options must appear for it (mandatory in hexadecimal). Two of these options will be incorrect (randomly generated), and one will be correct.

Each round, a new color will appear, and the player will have 10 seconds to respond, resulting in either a gain or loss of points:

- If the player doesn't respond in time, they lose 2 points.
- If the player responds in time but incorrectly, they lose 1 point.
- If the player responds in time and correctly, they earn 5 points.
- The game also keeps track of the highest score achieved in a game session (represented in the prototype as HIGH SCORE), as well as the current game's score (represented in the prototype as SCORE).

On the left, there is a history of colors from the current game, which visually shows the colors the player guessed correctly, the ones they guessed incorrectly, and how quickly they were answered. Each time a game session is started, this stack is reset (represented in the prototype as CURRENT/LATEST GAME).

### Features

- The game should only start when the player decides (represented in the prototype as START).
- If the player refreshes or closes the page:
  HIGH SCORE should persist.
- If a game is in progress, its data should be ignored and discarded. The game should return to the initial state with the START button.
- The stack related to the last completed game should persist.
- If the player wants, they can restart the game at any time (represented in the prototype as RESTART).
- If the player wants, they can clear all data saved by the game (represented in the prototype as RESET ALL DATA).

A TypeScript starter for Next.js that includes all you need to build amazing projects 🔥

**Project With Next.js 13 & React 18!**

- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** - Opinionated Code Formatter
- 🚫 **lint-staged** - Run linters against staged git files
- 💅 **Styled Components** - Use the best bits of ES6 and CSS to style your apps without stress
- 🚥 **Zustand** - A small, fast and scalable bearbones state-management solution using simplified flux principles.

### 🚀 Getting started

The best way to start with this project is using `create-next-app`.

```
npx create-next-app project-name -e https://github.com/niltonc/color-game
```

If you prefer you can clone this repository and run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `yarn run dev`;

To view the project open `http://localhost:3000`.

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.

## Documentation

[Click here to go to Documentation](./.github/Documentation.md)
