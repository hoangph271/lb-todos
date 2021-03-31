import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  _id: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isDone?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  content: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
