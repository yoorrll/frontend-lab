'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';

import { useState } from 'react';

import { mockSchedule, ScheduleType } from '@/data/scheduleData';

const TYPE_COLOR: Record<ScheduleType, string> = {
  CLASS: '#f9ca24',
  EXAM: '#dc2626',
  CLINIC: '#ff7979',
  COUNSELING: '#be2edd',
};

const TYPE_LABEL: Record<ScheduleType, string> = {
  CLASS: '수업',
  EXAM: '시험',
  CLINIC: '재시험',
  COUNSELING: '상담',
};

export default function MyCalendar() {
  const [filter, setFilter] = useState<ScheduleType | 'ALL'>('ALL');
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    date: string;
  } | null>(null);

  const filteredEvents =
    filter === 'ALL'
      ? mockSchedule
      : mockSchedule.filter((s) => s.type === filter);

  return (
    <div className="w-[600px] mx-auto mt-8 bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">학원 일정</h2>

        {/* 스케줄 필터 */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('ALL')}
            className={`flex justify-center items-center w-[60px] h-[25px] text-sm rounded-xl ${
              filter === 'ALL' ? 'bg-blue-400 text-white' : 'bg-gray-300'
            }`}
          >
            전체
          </button>

          {(Object.keys(TYPE_LABEL) as ScheduleType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`flex justify-center items-center w-[60px] h-[25px] text-sm rounded-xl ${
                filter === type ? 'bg-blue-400 text-white' : 'bg-gray-300'
              }`}
            >
              {TYPE_LABEL[type]}
            </button>
          ))}
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        dayMaxEvents={3}
        locale={koLocale}
        titleFormat={{ year: 'numeric', month: 'long' }}
        buttonText={{
          today: '오늘',
        }}
        dayCellContent={(arg) => (
          <span className="text-sm">{arg.date.getDate()}</span>
        )}
        events={filteredEvents.map((schedule) => ({
          id: schedule.id,
          title: schedule.title,
          date: schedule.date,
          backgroundColor: TYPE_COLOR[schedule.type],
          borderColor: TYPE_COLOR[schedule.type],
        }))}
        eventClick={(info) => {
          setSelectedEvent({
            title: info.event.title,
            date: info.event.startStr,
          });
        }}
      />

      {/* 일정 모달 */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[320px] rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              {selectedEvent.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              📅 {selectedEvent.date}
            </p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full bg-blue-400 text-white py-2 rounded-lg"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
