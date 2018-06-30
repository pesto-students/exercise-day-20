import todos from './todos';
import { ADD_TODO } from '../constants/ActionTypes';

describe('todos reducer', () => {
  // handle initial state
  test('handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  // handle addition of a todo onto the initial state
  test('handle addition of a todo onto the initial state', () => {
    expect(todos([], {
      type: ADD_TODO,
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
        text: 'Random todo',
        id: 0,
        completed: false,
      },
    ], {
      type: ADD_TODO,
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

