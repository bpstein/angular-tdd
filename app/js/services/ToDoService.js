toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  var self = this;

  self.getAll = function() {
    // http://blog.ninja-squad.com/2015/05/28/angularjs-promises/
    return $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi (response) {
    return response.data.map(function(toDoData){
      return new ToDoFactory(toDoData.text, toDoData.completed);
    });
  }
}]);