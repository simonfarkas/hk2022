import { IReminder } from "./IReminder";

export interface Props {
  reminder: IReminder;
  deleteReminder: (id: number) => void;
  markDone: (id: number) => void;
}
