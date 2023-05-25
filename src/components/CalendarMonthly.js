import days from '../data/days.json';
import { Table, Card } from 'react-bootstrap';
import CalendarDate from './CalendarDate';

function CalendarMonthly({ monthName, totalDays, startDay }) {
    var totalRows = Math.ceil((totalDays + startDay + 1) / 7);

    var topRowDates = [];
    for (var i = 0; i < startDay; i++) {
        topRowDates.push(
            <td key={'datePrev-' + i}>

            </td>
        );
    }
    const totalDaysFirstRow = 7 - startDay + 1;
    for (i = 1; i < totalDaysFirstRow; i++) {
        topRowDates.push(
            <td key={'date-' + i}>
                <CalendarDate hijriDate={i} />
            </td>
        );
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

            var daysCounter = 0;
            var dateCols = [];
            for (var j = startDateNextWeek; j < (totalDays + 1); j++) {
                if (daysCounter === 7) {
                    break;
                }

                dateCols.push(
                    <td key={'date-' + j}>
                        <CalendarDate hijriDate={j} />
                    </td>
                );

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
                <h3>{monthName}</h3>
            </Card.Header>
            <Card.Body className='p-0'>
                <Table bordered className='m-0'>
                    <thead>
                        <tr>
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
