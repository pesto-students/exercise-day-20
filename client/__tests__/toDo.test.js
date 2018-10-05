/* eslint-disable */
// Components
describe('<ToDoList /> ', () => {
  const components = shallow(<TodoList />);
  it('should have an input field', () => {
    expect(components.find('.input-field').to.have.lengthOf(1));
  });
  it('should have the add button', () => {
    expect(components.find('.input-add').to.have.lengthOf(1));
  });
});
// Actions
describe('Actions', () => {
  it('should call an action to create a todo', () => {
    const SUBMIT_ACTION = {
      type: SUBMIT,
      id: 1,
      item: 'first todo',
    };
    expect(actions.submit('first todo')).toEqual(SUBMIT_ACTION);
  });
  
  it('should call an action to delete a todo', () => {
    const DELETE_ACTION = {
      type: DELETE,
      id: 1,
    };
    expect(actions.delete(1)).toEqual(DELETE_ACTION);
  });
});



// Reducers
describe('Reducers', () => {
  it('should get the list of items', () => {
    const action = {
      type: SUBMIT,
      id: 1,
      item: 'first todo',
    };
    const result = {
      todoList: [{id: 1, item: 'first todo'}]
    };

    expect(reducer(action)).toEqual(result);
  });
});