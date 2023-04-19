// import { useEffect, useState } from "react";

import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [fetchedEvents, setFetchedEvents] = useState();
  //   const [error, setError] = useState();

  //   useEffect(() => {
  //     async function fetchEvents() {
  //       setIsLoading(true);

  //       setIsLoading(false);
  //     }

  //     fetchEvents();
  //   }, []);
  //   return (
  //     <>
  //       <div style={{ textAlign: "center" }}>
  //         {isLoading && <p>Loading...</p>}
  //         {error && <p>{error}</p>}
  //       </div>
  //       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
  //     </>
  // );
  const data = useLoaderData();
  const events = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //throw {message: 'Could not fetch events'};
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Coul not fetch events" }), {
    // status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}
