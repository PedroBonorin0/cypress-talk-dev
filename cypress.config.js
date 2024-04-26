const { defineConfig } = require("cypress");

let todoId;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        saveTodoId(id) {
          todoId = id;
          return todoId;
        },
        getTodoId() {
          return todoId;
        }
      })
    },
  },
});
