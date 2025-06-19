"use-client";

import React from "react";

interface BirthDatePickerProps {
  year: string;
  month: string;
  day: string;
  onYearChange: (val: string) => void;
  onMonthChange: (val: string) => void;
  onDayChange: (val: string) => void;
}

const years = Array.from({ length: 100 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);
const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

export default function BirthDatePicker({
  year,
  month,
  day,
  onYearChange,
  onMonthChange,
  onDayChange,
}: BirthDatePickerProps) {
  return (
    <div className="flex gap-4">
      <select
        value={year}
        onChange={(e) => onYearChange(e.target.value)}
        className="bg-white border border-[#D7C3B3] rounded-xl px-4 py-3 text-[#4B3429] text-lg focus:outline-none focus:ring-4 focus:ring-[#D8A47F]"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <select
        value={month}
        onChange={(e) => onMonthChange(e.target.value)}
        className="bg-white border border-[#D7C3B3] rounded-xl px-4 py-3 text-[#4B3429] text-lg focus:outline-none focus:ring-4 focus:ring-[#D8A47F]"
      >
        <option value="">Month</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={day}
        onChange={(e) => onDayChange(e.target.value)}
        className="bg-white border border-[#D7C3B3] rounded-xl px-4 py-3 text-[#4B3429] text-lg focus:outline-none focus:ring-4 focus:ring-[#D8A47F]"
      >
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}
