import {DefaultCrudRepository} from '@loopback/repository';
import {Todo, TodoRelations} from '../models';
import {UsersTodosDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.todoID,
  TodoRelations
> {
  constructor(
    @inject('datasources.users_todos_db') dataSource: UsersTodosDbDataSource,
  ) {
    super(Todo, dataSource);
  }
}
