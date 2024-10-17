import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { TEventoEvent } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";

type TEventsPageProps = {
    params: {
        city: string;
    };
};

export default async function page({ params }: TEventsPageProps) {
    const city = params.city;

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">
                {city === "all" && "All Events"}
                {city !== "all" &&
                    `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>
            <Suspense fallback={<Loading />}>
                <EventsList city={city} />
            </Suspense>
        </main>
    );
}
