import days from '../data/days.json';
import { Table, Card } from 'react-bootstrap';
import CalendarDate from './CalendarDate';
import christMonths from '../data/christMonths.json';

function CalendarMonthly({ month, startDay, startPasaranDay, startChristDate }) {
    var totalDays = month.totalDays;
    var totalRows = Math.ceil((totalDays + startDay + 1) / 7);

    var topRowDates = [];
    var daysCounter = 0;
    for (var i = 0; i < startDay; i++) {
        topRowDates.push(
            <td key={'datePrev-' + i}>

            </td>
        );
        daysCounter++;
    }
    const totalDaysFirstRow = 7 - startDay + 1;
    var pasaranDay = startPasaranDay;
    var christDate = new Date(startChristDate.toISOString());
    var endChristDate = new Date(startChristDate.toISOString());
    endChristDate.setDate(endChristDate.getDate() + totalDays - 1);

    for (i = 1; i < totalDaysFirstRow; i++) {
        if (i > 1) {
            christDate.setDate(christDate.getDate() + 1);
        }

        topRowDates.push(
            <td key={'date-' + i}>
                <CalendarDate
                    hijriDate={i}
                    pasaranDay={pasaranDay}
                    christDate={christDate.getDate()}
                    isGreen={month.isFastingMonth ? true : (month.fastingDates.indexOf(i) >= 0 ? true : (daysCounter === 5) ? true : false)}
                    isRed={startDay === 0 && i === 1}
                />
            </td>
        );

        if (pasaranDay < 4) {
            pasaranDay++;
        }
        else {
            pasaranDay = 0;
        }
        daysCounter++;
    }

    var rows = [];
    var startDateNextWeek = 0;
    for (i = 0; i < totalRows; i++) {
        if (i === 0) {
            rows.push(
                <tr key={'row-' + i}>
                    {topRowDates}
                </tr >
            )
        }
        else {
            if (i === 1) {
                startDateNextWeek = totalDaysFirstRow;
            }
            else {
                startDateNextWeek += 7;
            }

            daysCounter = 0;
            var dateCols = [];
            for (var j = startDateNextWeek; j < (totalDays + 1); j++) {
                if (daysCounter === 7) {
                    break;
                }

                christDate.setDate(christDate.getDate() + 1);

                dateCols.push(
                    <td key={'date-' + j}>
                        <CalendarDate
                            hijriDate={j}
                            pasaranDay={pasaranDay}
                            christDate={christDate.getDate()}
                            isGreen={month.isFastingMonth ? true : (month.fastingDates.indexOf(j) >= 0 ? true : (daysCounter === 5 ? true : false))}
                            isRed={daysCounter === 0}
                        />
                    </td>
                );

                if (pasaranDay < 4) {
                    pasaranDay++;
                }
                else {
                    pasaranDay = 0;
                }

                daysCounter++;
            }
            rows.push(
                <tr key={'row-' + i}>
                    {dateCols}
                </tr >
            )
        }
    }
    return (
        <Card>
            <Card.Header className='text-center'>
                <h5>{month.monthName}</h5>
                <p className="text-danger">
                    {
                        (
                            startChristDate.getDate() + " " + christMonths[startChristDate.getMonth()] + " " + startChristDate.getFullYear() + " M"
                            + " - " +
                            endChristDate.getDate() + " " + christMonths[endChristDate.getMonth()] + " " + endChristDate.getFullYear() + " M"
                        )
                    }
                </p>
            </Card.Header>
            <Card.Body className='p-0'>
                <Table bordered className='m-0'>
                    <thead>
                        <tr className="calendar-day-name">
                            {
                                days.map((item, idx) => {
                                    return (
                                        <th key={'day-' + idx} style={{ width: 100 }}>
                                            {item}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default CalendarMonthly;
