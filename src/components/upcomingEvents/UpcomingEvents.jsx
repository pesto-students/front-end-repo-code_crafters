import { CalendarClock } from "lucide-react";
import React from "react";
import EventCard from "../eventCard/EventCard";
import { Button } from "../ui/button";

const events = [
  {
    title: "AR Rahman Concert for Peace",
    images: ["https://pbs.twimg.com/media/FmChEr6XkAImZ4i.jpg"],
    slug: "abcd-xyz",
  },
  {
    title: "B Praak Live",
    images: [
      "https://scontent.fgau3-3.fna.fbcdn.net/v/t39.30808-6/406267005_758329636336781_2133181235364031584_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NFCcsN0Z3R4AX-PJHNh&_nc_ht=scontent.fgau3-3.fna&oh=00_AfAeehNAei831PRLQ14eAstu7nzq-t1bqySB-GsWoCNEjw&oe=660ADC76",
    ],
    slug: "abcd-xyz",
  },
  {
    title: "SANAM Live",
    images: ["https://pbs.twimg.com/media/FmChEr6XkAImZ4i.jpg"],
    slug: "abcd-xyz",
  },
  {
    title: "Simba Uproar 2024 | Guwahati",
    images: [
      "https://scontent.fgau3-3.fna.fbcdn.net/v/t39.30808-6/406267005_758329636336781_2133181235364031584_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NFCcsN0Z3R4AX-PJHNh&_nc_ht=scontent.fgau3-3.fna&oh=00_AfAeehNAei831PRLQ14eAstu7nzq-t1bqySB-GsWoCNEjw&oe=660ADC76",
    ],
    slug: "abcd-xyz",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 text-content mt-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <CalendarClock className="text-primary" />
          <h2 className="text-lg font-semibold text-content uppercase">
            Upcoming Events
          </h2>
        </div>

        <Button variant="outline">VIEW ALL</Button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((item, i) => (
          <EventCard event={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
