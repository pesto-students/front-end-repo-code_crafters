import React from "react";
import { CalendarDays, History, MapPin, Star } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "SANAM Live",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1509056456%2Fomrrjhtb6hikonaehblv.jpg",
    ],
  },
  {
    title: "Simba Uproar 2024 | Guwahati",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1706699255%2Fdlbitczmy7n2v17uc4xy.png",
    ],
  },
  {
    title: "Kanan Gill Experience - India Tour 2024 - Guwahati",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1700556828%2Fiqwn93dgvkpc8vp8bvml.jpg",
    ],
  },
  {
    title: "Kisi Ko Batana Mat by Anubhav Singh Bassi",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1707894012%2Fmc6dexmf8biost4q27h6.png",
    ],
  },
];

const RecentEvents = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 text-content mt-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <History className="text-primary" />
          <h2 className="text-lg font-semibold text-content uppercase">
            Recent Events
          </h2>
        </div>
        <Button variant="outline">VIEW ALL</Button>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row border rounded-lg shadow-sm bg-white"
          >
            <div className="w-full md:w-6/12">
              <Image
                width={480}
                height={360}
                className="object-cover w-full h-full rounded-t-lg md:rounded-r-none md:rounded-l-lg"
                src={event.images[0]}
                alt={event.title}
              />
            </div>
            <div className="w-full md:w-6/12 flex flex-col p-6">
              <Link href="/">
                <h5 className="text-lg font-medium tracking-tight text-content line-clamp-1">
                  {event.title}
                </h5>
              </Link>
              <div className="mt-4 flex items-center ">
                <CalendarDays className="w-4 h-4 text-primary" />
                <div className="text-sm ml-2 font-medium line-clamp-1">
                  1 March, 2024 - 3 March, 2024
                </div>
              </div>
              <div className="mt-2 flex items-center ">
                <MapPin className="w-4 h-4 text-primary" />
                <div className="text-sm ml-2 font-medium line-clamp-1 ">
                  ACA Stadium, Barsapara
                </div>
              </div>
              <div className="mt-2 flex items-center ">
                <div className="flex">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div className="text-sm ml-2 font-medium line-clamp-1 ">
                  23 Reviews
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentEvents;
