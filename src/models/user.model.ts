import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: false,
    mysql: {
      table: 'users'
    }
  }
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  USERID?: number;

  @property({
    type: 'string',
    required: true,
  })
  FIRST_NAME: string;

  @property({
    type: 'string',
    required: true,
  })
  LAST_NAME: string;

  @property({
    type: 'number',
    required: true,
  })
  AGE: number;

  @property({
    type: 'string',
    required: true,
  })
  CITY: string;

  @property({
    type: 'string',
    required: true,
  })
  COUNTRY: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
