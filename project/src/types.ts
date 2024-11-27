export interface Goal {
  id: string;
  title: string;
  baseAmount: number;
  repetitions: number;
  targetAmount: number;
  startDate: string;
  endDate: string;
  dailyTarget: number;
  progress: number;
}

export interface ProgressEntry {
  date: string;
  amount: number;
}

export interface GoalFormData {
  title: string;
  baseAmount: number;
  repetitions: number;
  startDate: string;
  endDate: string;
}