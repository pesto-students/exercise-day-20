const { getTaskList }  = require('../apiFunctions');


describe('Testing Api Calls', () => {
  describe('Checking if get Api is returning a response', () => {
    test('should return an array of task', async () => {
      const apiResponse = await getTaskList();
      expect(apiResponse.length).toBe(1);
    });
  });
});
