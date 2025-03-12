// https://code-basics.com/ru/languages/typescript/lessons/literal-types

type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  // BEGIN (write your solution here)
  const makeTurn = (direction: 'left' | 'right') => {
    const turtulePosition = state.indexOf("turtle");

    if ((direction === 'left' && turtulePosition === 0) || (direction === 'right' && turtulePosition === state.length - 1)) {
      throw new Error('ERROR')
    }

    if (direction === 'left') {
      [state[turtulePosition], state[turtulePosition - 1]] = [state[turtulePosition - 1], state[turtulePosition]];
    } else if (direction === 'right') {
      [state[turtulePosition], state[turtulePosition + 1]] = [state[turtulePosition + 1], state[turtulePosition]];
    }
  }
  // END

  return { makeTurn, state };
};
