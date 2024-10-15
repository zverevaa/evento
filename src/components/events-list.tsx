import { TEventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type TEventsListProps = {
    events: TEventoEvent[];
};

export default function EventsList({ events }: TEventsListProps) {
    return (
        <section>
            {" "}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
