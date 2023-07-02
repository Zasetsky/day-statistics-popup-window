export interface NormLevel {
  val: number;
  max: number;
}

export interface CallsCount {
  val: number;
  max: number;
}

export interface WorkPoint {
  time: string;
  name?: string;
  comment: string;
}

export interface WorkPoints {
  [date: string]: WorkPoint[][];
}

export interface LocalStates {
  showOptions: boolean;
}

export interface User {
  isAdmin: boolean;
  normLevel: NormLevel;
  callsCount: CallsCount;
  workPoints: WorkPoints;
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
