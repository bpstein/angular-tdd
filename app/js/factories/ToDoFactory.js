toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(text, completed){
    this.text = text;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  // we attach a new method to the Todo prototype
  // just like we did Thermostat
  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo;
});
