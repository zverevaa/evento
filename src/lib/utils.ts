import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getEvents = unstable_cache(async (city: string, page = 1) => {
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc",
        },
        take: 6,
        skip: (page - 1) * 6,
    });

    let totalCount;
    if (city === "all") {
        totalCount = await prisma.eventoEvent.count();
    } else {
        totalCount = await prisma.eventoEvent.count({
            where: {
                city: capitalize(city),
            },
        });
    }

    return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug,
        },
    });

    if (!event) {
        return notFound();
    }

    return event;
});
