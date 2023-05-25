import "./Calendar.css";
import pasaranDays from "../data/pasaranDays.json";
import { Row, Col } from "react-bootstrap";

function CalendarDate({ hijriDate, christianDate, pasaranDay }) {
    christianDate = 1;
    pasaranDay = 0;
    return (
        <Row className="calendar-row">
            <Col className="p-0">
                <div className="calendar-hijri-date">{hijriDate}</div>
            </Col>
            <Col className="p-0">
                <small className="d-block">{christianDate}</small>
                <small className="d-block">{pasaranDays[pasaranDay]}</small>
            </Col>
        </Row>
    )
}

export default CalendarDate;