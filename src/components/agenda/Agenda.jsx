import { ChevronRight, Clock, ListChecks, MapPinned } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const agenda = [
  {
    title: "Opening ceremony",
    images: [],
    startTime: "3PM",
    endTime: "4PM",
    location: "Main Stage",
  },
  {
    title: "B Praak live concert",
    images: [],
    startTime: "4:30PM",
    endTime: "7PM",
    location: "Main Stage",
  },
];

const Agenda = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 text-content mt-12">
      <div className="flex gap-2 items-center">
        <ListChecks className="text-primary" />
        <h2 className="text-lg font-semibold text-content uppercase">
          Itinerary
        </h2>
      </div>

      <div class="text-sm font-medium text-center text-content border-b mt-6">
        <ul class="flex flex-wrap -mb-px">
          <li class="me-2">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg opacity-80"
              aria-current="page"
            >
              Mon, 23 June
            </button>
          </li>
          <li class="me-2">
            <button
              class="inline-block p-4 border-b-2 border-content text-content rounded-t-lg  "
              aria-current="page"
            >
              Tue, 24 June
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {agenda.map((item, i) => (
          <Dialog key={i}>
            <DialogTrigger>
              <div className="p-6 border shadow-sm rounded-lg flex bg-white cursor-pointer">
                <div className="flex-1">
                  <h4 className="text-content text-lg font-semibold text-left">
                    {item.title}
                  </h4>
                  <div className="flex gap-6 text-sm mt-2">
                    <div className="flex gap-1 items-center">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        {item.startTime} - {item.endTime}
                      </span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <MapPinned className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <ChevronRight className="opacity-60" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-content">{item.title}</DialogTitle>
                <DialogDescription>
                  <Image
                    width={480}
                    height={360}
                    src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1702288015%2Fdhlkrsbpopg5cfpnz23n.jpg"
                    className="w-full object-cover rounded-md mt-4"
                    alt="Event Spotlight"
                  />
                  <p className="mt-4">
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </p>
                  <div className="mt-4 flex items-center ">
                    <Clock className="w-4 h-4 text-primary" />
                    <div className="text-sm ml-2 font-medium line-clamp-1">
                      {item.startTime} - {item.endTime}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center ">
                    <MapPinned className="w-4 h-4 text-primary" />
                    <div className="text-sm ml-2 font-medium line-clamp-1 ">
                      {item.location}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
