import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type TEventsListProps = {
    city: string;
    page?: number;
};

export default async function EventsList({ city, page }: TEventsListProps) {
    const { events, totalCount } = await getEvents(city, page);
    const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
    const nextPath =
        totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {" "}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
            <PaginationControls
                previousPath={previousPath}
                nextPath={nextPath}
            />
        </section>
    );
}
