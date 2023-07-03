export interface NormLevel {
  val: number;
  max: number;
}

export interface LocalStates {
  showOptions: boolean;
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

export interface DatesData {
  breaksCount: number;
  totalTime: string;
  downtime: string;
  workPoints: WorkPoint[][];
}

export interface Dates {
  [date: string]: DatesData;
}

export interface User {
  isAdmin: boolean;
  normLevel: NormLevel;
  callsCount: CallsCount;
  dates: Dates;
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
