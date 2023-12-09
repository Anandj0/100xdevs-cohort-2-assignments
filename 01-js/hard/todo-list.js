/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    todo = []

    add(item){
      this.todo.push(item);
    }

    remove(index){
      if(index>=this.todo.length){
        console.log("Invalid index");
      }
      else{
        this.todo.splice(index,1);
      }
    }

    update(index, updatedTodo){
      if(index>=this.todo.length){
        console.log("Invalid index");
      }
      else{
        this.todo[index] = updatedTodo;
      } 
    }

    getAll(){
      return this.todo;
    }

    get(indexOfTodo){
      if(indexOfTodo>=this.todo.length){
        return null;
      }
      else{
        return this.todo[indexOfTodo];
      }
    }
    clear(){
      this.todo.splice(0,this.todo.length)
    }
}

module.exports = Todo;
