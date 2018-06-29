import todos from './todos';
import { ADD_TO_DO } from '../constants/ActionTypes';

describe('todos reducer', () => {
  // handle initial state
  test.only('handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  // handle addition of a todo onto the initial state
  test('handle addition of a todo onto the initial state', () => {
    expect(todos([], {
      type: ADD_TO_DO,
      text: 'Random todo',
      id: 0,
    })).toEqual([
      {
        id: 0,
        text: 'Random todo',
        completed: false,
      },
    ]);
  });

  // handle addition of a todo onto existing todos
  test('handle addition of a todo onto existing todos', () => {
    expect(todos([
      {
        type: ADD_TO_DO,
        text: 'Random todo',
        id: 0,
      },
    ], {
      type: ADD_TO_DO,
      text: 'Another random todo',
      id: 1,
    })).toEqual([
      {
        id: 0,
        text: 'Random todo',
        completed: false,
      },
      {
        id: 1,
        text: 'Another random todo',
        completed: false,
      },
    ]);
  });
});

