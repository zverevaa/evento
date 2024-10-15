import { TEventoEvent } from "@/lib/types";

type TEventCardProps = {
    event: TEventoEvent;
};

export default function EventCard({ event }: TEventCardProps) {
    return <section>{event.name}</section>;
}
