import "../styles/calenderEventSyles.css";

const CalenderEvent = (props) => {
    const entryDate = new Date(props.date).toLocaleDateString();
    const day = entryDate.split("/")[0];
    const year = entryDate.split("/")[2];

    const classNameVariation =
        props.description.indexOf("Birthday") !== -1 ? "info"
        : props.description.indexOf("Wedding") !== -1 ? "warning"
        : "secondary";

    return (
        <div className={`calender-content ${classNameVariation}`}>
            <p className="day">{day}</p>
            <p className="description">{props.description}</p>
            <p className="year">{year}</p>
        </div>
    );
};

export default CalenderEvent;
