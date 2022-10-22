import { IAuthor } from "./IAuthor";

export interface IReminder {
  id: number;
  name: string;
  date: string;
  isDone: boolean;
  isShared: false;
  sharedWith: [];
  author: IAuthor;
}
