# Color Game

### Como o jogo funciona?

O jogo consiste em acertar o máximo possível de cores em 30s. Quando o jogo inicia, uma cor aleatória irá aparecer e para ela deverão aparecer 3 opções de resposta (obrigatoriamente em hexadecimal). Sendo duas incorretas (geradas aleatoriamente), e uma correta.
A cada rodada, uma nova cor aparece, e o jogador terá 10s para responder e resultar em ganho ou perda de pontuação:

- Se o jogador não responder a tempo, ele perde 2 pontos.
- Se o jogador responder a tempo, mas errado, perderá 1 ponto.
- Se o jogador responder a tempo e corretamente, ganhará 5 pontos.

O jogo conta também com o máximo de pontuação que já foi feita em uma partida (representado no protótipo por `HIGH SCORE`).
E a pontuação da partida atual (representada no protótipo por `SCORE`).
Existirá também à esquerda, um histórico das cores referentes a partida atual, que dirá de forma visual quais o jogador acertou, quais errou, e em quanto tempo foram respondidas. A cada vez que uma partida é iniciada, essa pilha é resetada. (representada no protótipo por `CURRENT/LATEST GAME`).

### Funcionalidades

- O jogo só deve começar quando o jogador decidir (representado no protótipo por `START`)
- Caso o jogador atualize, ou feche a página:
  - `HIGH SCORE` deverá persistir.
  - Se um jogo estiver em andamento, ignorar e jogar fora seus dados. Voltando ao estado inicial com o botão `START`
  - Pilha referente a última partida concluída deverá persistir
- Se o jogador quiser, ele poderá reiniciar a partida a qualquer momento (representado no protótipo por `RESTART`)
- Se o jogador quiser, ele poderá limpar todos os dados já salvos pelo jogo. (representado no protótipo por `RESET ALL DATA`)

A TypeScript starter for Next.js that includes all you need to build amazing projects 🔥

**Project With Next.js 13 & React 18!**

- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** - Opinionated Code Formatter
- 🚫 **lint-staged** - Run linters against staged git files
- 💅 **Styled Components** - Use the best bits of ES6 and CSS to style your apps without stress

### 🚀 Getting started

The best way to start with this project is using `create-next-app`.

```
npx create-next-app project-name -e https://github.com/niltonc/color-game
```

If you prefer you can clone this repository and run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `yarn dev`;

To view the project open `http://localhost:3000`.

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.

## **After your pull request is merged**, you can safely delete your branch.
