import { IAuthor } from "./IAuthor";

export interface Props {
  reminder: IReminder;
  deleteReminder: (id: number) => void;
  markDone: (id: number) => void;
}

export interface IReminder {
  id: number;
  name: string;
  date: string;
  isDone: boolean;
  isShared: false;
  sharedWith: [];
  author: IAuthor;
}
