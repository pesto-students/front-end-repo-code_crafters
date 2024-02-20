import { CalendarClock } from "lucide-react";
import React from "react";
import EventCard from "../eventCard/EventCard";
import { Button } from "../ui/button";

const events = [
  {
    title: "AR Rahman Concert for Peace",
    images: [
      "https://media.insider.in/image/upload/c_crop,g_custom/v1673065185/rxj4gti5sbb7lciqu5nb.jpg",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "B Praak Live",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1702288015%2Fdhlkrsbpopg5cfpnz23n.jpg",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "SANAM Live",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1509056456%2Fomrrjhtb6hikonaehblv.jpg",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "Simba Uproar 2024 | Guwahati",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1706699255%2Fdlbitczmy7n2v17uc4xy.png",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "Kanan Gill Experience - India Tour 2024 - Guwahati",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1700556828%2Fiqwn93dgvkpc8vp8bvml.jpg",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "Kisi Ko Batana Mat by Anubhav Singh Bassi",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1707894012%2Fmc6dexmf8biost4q27h6.png",
    ],
    slug: "abcd-xyz",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 text-content mt-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <CalendarClock className="text-primary" />
          <h2 className="text-lg font-semibold text-content uppercase">
            Upcoming Events
          </h2>
        </div>

        <Button variant="outline">VIEW ALL</Button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((item, i) => (
          <EventCard event={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
