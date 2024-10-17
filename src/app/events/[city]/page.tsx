import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from 'next';

type TEventsPageProps = {
    params: {
        city: string;
    };
};

export function generateMetadata({ params }: TEventsPageProps): Metadata {
    const city = params.city;
    return {
        title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
    };
}

export default async function page({ params }: TEventsPageProps) {
    const city = params.city;

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">
                {city === "all" && "All Events"}
                {city !== "all" && `Events in ${capitalize(city)}`}
            </H1>
            <Suspense fallback={<Loading />}>
                <EventsList city={city} />
            </Suspense>
        </main>
    );
}
