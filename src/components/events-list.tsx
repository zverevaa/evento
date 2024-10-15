import { TEventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type TEventsListProps = {
    events: TEventoEvent[];
};

export default function EventsList({ events }: TEventsListProps) {
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {" "}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
