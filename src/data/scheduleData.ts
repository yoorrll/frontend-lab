export type ScheduleType = 'CLASS' | 'EXAM' | 'CLINIC' | 'COUNSELING';

export interface ScheduleObj {
  id: string;
  title: string;
  date: string;
  type: ScheduleType;
}

export const mockSchedule: ScheduleObj[] = [
  {
    id: 'task-1',
    title: '고2 A반 수업',
    date: '2026-01-10',
    type: 'CLASS',
  },
  {
    id: 'task-2',
    title: '서원고 기말고사',
    date: '2026-01-22',
    type: 'EXAM',
  },
  {
    id: 'task-3',
    title: '재시험',
    date: '2026-01-12',
    type: 'CLINIC',
  },
  {
    id: 'task-4',
    title: '학생 상담',
    date: '2026-01-28',
    type: 'COUNSELING',
  },
];
