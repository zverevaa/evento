import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TEventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );
    const events: TEventoEvent[] = await response.json();
    return events;
}

export async function getEvent(slug: string) {
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );
    const event = await response.json();
    return event;
}
