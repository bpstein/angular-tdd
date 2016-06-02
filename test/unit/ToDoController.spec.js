describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    // https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with several todos', function() {
    // Create todos now using the factory
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewToDo');

    // Similarly this now uses a factory
    var todo = new ToDoFactory("NewToDo");
    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('removes the last todo', function() {
    initialCount = ctrl.todos.length;

    ctrl.removeToDo();

    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });
});