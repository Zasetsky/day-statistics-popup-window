export interface NormLevel {
  val: number;
  max: number;
}

export interface CallsCount {
  val: number;
  max: number;
}

export interface LocalStates {
  showOptions: boolean;
}

export interface User {
  isAdmin: boolean;
  normLevel: NormLevel;
  callsCount: CallsCount;
  comment: string;
}

export interface Status {
  date: string;
  dayStatus: string;
  comment: string;
}

export interface RootState {
  user: User;
  status: Status[];
  localStates: LocalStates;
}
