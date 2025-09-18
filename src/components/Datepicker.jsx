import { useState, useMemo, useRef, useEffect, useCallback } from 'react'

// Helper: returns number of days in a given month (handles JS month overflow)
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

// Helper: build 6-week calendar grid (42 days) with flags for otherMonth
const buildCalendarDays = (year, month) => {
  const days = []
  const firstDayOfWeek = new Date(year, month, 1).getDay()

  // previous month days
  const prevMonthDays = daysInMonth(year, month - 1)
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      otherMonth: true,
    })
  }

  // current month days
  const thisMonthDays = daysInMonth(year, month)
  for (let i = 1; i <= thisMonthDays; i++) {
    days.push({ date: new Date(year, month, i), otherMonth: false })
  }

  // next month days to fill 6 weeks
  const nextDays = 42 - days.length
  for (let i = 1; i <= nextDays; i++) {
    days.push({ date: new Date(year, month + 1, i), otherMonth: true })
  }

  return days
}

function DayCell({ day, onSelect, selected }) {
  const isOther = day.otherMonth
  const isSelected = selected
  const base = 'p-2 cursor-pointer rounded-full w-8 h-8 inline-flex items-center justify-center'
  const classes = [
    base,
    isOther ? 'text-gray-400' : 'text-gray-700',
    isSelected ? 'bg-purple-500 text-white' : '',
    !isOther && !isSelected ? 'hover:bg-purple-100' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      onClick={() => !isOther && onSelect(day)}
      className={classes}
      aria-pressed={isSelected}
      disabled={isOther}
    >
      {day.date.getDate()}
    </button>
  )
}

export default function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const containerRef = useRef(null)

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : ''
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const calendarDays = useMemo(() => buildCalendarDays(currentYear, currentMonth), [currentYear, currentMonth])

  const currentMonthName = useMemo(() => {
    return new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })
  }, [currentMonth, currentYear])

  const toggleCalendar = useCallback(() => setShowCalendar((v) => !v), [])

  const prevMonth = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }, [currentMonth])

  const nextMonth = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }, [currentMonth])

  const selectDate = useCallback((day) => {
    setSelectedDate(day.date)
    setShowCalendar(false)
  }, [])

  const isSelected = useCallback(
    (day) => selectedDate && day.date.toDateString() === selectedDate.toDateString(),
    [selectedDate]
  )

  // close on outside click or Escape
  useEffect(() => {
    function onClick(e) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) setShowCalendar(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setShowCalendar(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={containerRef}>
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={(e) => { e.stopPropagation(); toggleCalendar() }}
        placeholder="Select date"
        className="w-40 p-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-haspopup="dialog"
      />

      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-50 p-4 w-max">
          <div className="flex justify-between items-center mb-2">
            <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-md">&lt;</button>
            <div className="font-medium text-gray-800">{currentMonthName} {currentYear}</div>
            <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-md">&gt;</button>
          </div>

          <div className="grid grid-cols-7 text-center mb-2">
            {weekdays.map((d) => (
              <div key={d} className="font-semibold text-gray-600 text-sm">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {calendarDays.map((day) => (
              <DayCell key={day.date.toISOString()} day={day} onSelect={selectDate} selected={isSelected(day)} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
