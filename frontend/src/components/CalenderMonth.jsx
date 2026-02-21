import Card from "./Card";
import CalenderEvent from "./CalenderEvent";

const CalenderMonth = ({ month, monthName }) => {
    // const allEvents = [...month.events.birthdays, ...month.event.anniversaries];
    const allEvents = [...month.events.birthdays];

    const sortedEvents = allEvents.sort((a, b) => {
        let dateA = new Date(a.date).toLocaleDateString();
        let dateB = new Date(b.date).toLocaleDateString();

        const newA = Number(dateA.split("/")[0]);
        const newB = Number(dateB.split("/")[0]);

        return newA - newB;
    });

    return (
        <Card title={monthName}>
            {month.events.birthdays.map((entry, index) => (
                <CalenderEvent
                    key={index}
                    description={entry.of}
                    date={entry.date}
                />
            ))}
        </Card>
    );
};

export default CalenderMonth;
