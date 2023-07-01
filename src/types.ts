export interface NormLevel {
  val: number;
  max: number;
}

export interface CallsCount {
  val: number;
  max: number;
}

export interface User {
  isAdmin: boolean;
  normLevel: NormLevel;
  callsCount: CallsCount;
  comment: string;
}

export interface Status {
  dayStatus: string;
  comment: string;
}

export interface RootState {
  user: User;
  status: Status;
}
