import { TEventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type TEventsListProps = {
    city: string;
};

export default async function EventsList({ city }: TEventsListProps) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
        {
            next: {
                revalidate: 300,
            },
        }
    );
    const events: TEventoEvent[] = await response.json();
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {" "}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}
