import { v4 as uuidv4 } from 'uuid';

export class UuidAdapter {
  static generate = (): string => uuidv4();
}