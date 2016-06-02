toDoApp.controller('ToDoController', function() {
  var self = this;
  //  two objects, each with two attributes
  self.todos = [{ text: "ToDo1", completed: true   }, { text: "ToDo2", 
    completed: false   }];

  self.addToDo = function(todoText) {
    self.todos.push({text: todoText, completed: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  }
});