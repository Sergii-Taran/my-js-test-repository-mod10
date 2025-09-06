import { refs } from './refs.js';

document.addEventListener('DOMContentLoaded', renderCalendar);

function renderCalendar() {
  const currentDate = new Date();
  const month = currentDate.toLocaleDateString('uk-UA', { month: 'long' });
  const year = currentDate.toLocaleDateString('uk-UA', { year: 'numeric' });
  const weekDay = currentDate.toLocaleDateString('uk-UA', { weekday: 'long' });
  const day = currentDate.toLocaleDateString('uk-UA', { day: 'numeric' });

  refs.calendarContainer.querySelector('.js-month').textContent = month;
  refs.calendarContainer.querySelector('.js-day-number').textContent = day;
  refs.calendarContainer.querySelector('.js-day').textContent = weekDay;
  refs.calendarContainer.querySelector('.js-year').textContent = year;
}
