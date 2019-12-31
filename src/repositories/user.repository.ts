import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {UsersTodosDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.USERID,
  UserRelations
> {
  constructor(
    @inject('datasources.users_todos_db') dataSource: UsersTodosDbDataSource,
  ) {
    super(User, dataSource);
  }
}
