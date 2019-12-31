import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: false,
    mysql: {
      table: 'todos'
    }
  }
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  todoID?: number;

  @property({
    type: 'number',
    required: true,
  })
  userID: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'date',
    required: true,
  })
  created: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
