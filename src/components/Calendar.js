import CalendarMonthly from "./CalendarMonthly";

function Calendar() {
  return (
    <div>
        <CalendarMonthly monthName="Ramadhan" totalDays={30} startDay={2} />
    </div>
  );
}

export default Calendar;
