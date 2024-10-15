type TEventPageProps = {
    params: {
        slug: string;
    };
};

export default async function EventPage({ params }: TEventPageProps) {
    const slug = params.slug;
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );
    const event = await response.json();

    return <main>page</main>;
}
