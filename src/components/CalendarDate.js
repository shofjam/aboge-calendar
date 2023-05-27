import "./Calendar.css";
import pasaranDays from "../data/pasaranDays.json";
import { Row, Col } from "react-bootstrap";

function CalendarDate({ hijriDate, christDate, pasaranDay, isToday, isGreen, isRed }) {
    return (
        <Row className="calendar-row">
            <Col className="p-0">
                <div className={"calendar-hijri-date" + (isGreen ? " text-success" : (isRed ? " text-danger" : ""))}>{hijriDate}</div>
            </Col>
            <Col className="p-0">
                <div className="calendar-christ-date text-danger">{christDate}</div>
                <div className="calendar-pasaran-day text-success">{pasaranDays[pasaranDay]}</div>
            </Col>
        </Row>
    )
}

export default CalendarDate;