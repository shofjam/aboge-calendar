import { Row, Col } from 'react-bootstrap';
import CalendarMonthly from "./CalendarMonthly";
import almanacs from '../data/almanacs.json';
import currentDate from '../data/currentDate.json';
import christMonths from '../data/christMonths.json'

function Calendar() {
  const currentYear = currentDate.year;
  var year = almanacs[currentYear];
  var data = year.months;
  var jsxMonths = [];

  var startDay = 0;
  var pasaranDay = 0;
  var prevMonthTotalDays = 0;
  var christDate = new Date(currentDate.christDate);

  var startChristDateThisYear = new Date(currentDate.christDate);

  var endChristDateThisYear = new Date(currentDate.christDate);
  var totalDaysThisYear = data.reduce((accum, item) => accum + item.totalDays, 0);
  endChristDateThisYear.setDate(endChristDateThisYear.getDate() + totalDaysThisYear);

  data.forEach((month, idx) => {
    if (idx === 0) {
      startDay = year.startDay;
      pasaranDay = year.startPasaran;
    }
    else {
      startDay = (prevMonthTotalDays + startDay) % 7;
      pasaranDay = (prevMonthTotalDays + pasaranDay) % 5;
      christDate.setDate(christDate.getDate() + prevMonthTotalDays);
    }
    var startChristDateThisMonth = new Date(christDate.toISOString());
    jsxMonths.push(
      <Col key={"month-" + month.monthName} xs={12} md={12} lg={6} xl={6} className='mb-4'>
        <CalendarMonthly
          month={month}
          startDay={startDay}
          startPasaranDay={pasaranDay}
          startChristDate={startChristDateThisMonth}
        />
      </Col>
    )

    prevMonthTotalDays = month.totalDays;
  })

  return (
    <div>
      <h2><span className="year-name-arabic-letter">{year.yearNameArabicLetter}</span> {year.yearName + " = " + currentDate.hijriYear + " H"}</h2>
      <h5 className="text-danger mb-5">
        {
          (
            startChristDateThisYear.getDate() + " " + christMonths[startChristDateThisYear.getMonth()] + " " + startChristDateThisYear.getFullYear() + " M"
            + " - " +
            endChristDateThisYear.getDate() + " " + christMonths[endChristDateThisYear.getMonth()] + " " + endChristDateThisYear.getFullYear() + " M"
          )
        }
      </h5>
      <Row>
        {jsxMonths}
      </Row>
    </div>
  );
}

export default Calendar;
