"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  CalendarDays,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Flame,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

const Spotlight = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const slideNext = () => emblaApi && emblaApi.scrollNext();
  const slidePrev = () => emblaApi && emblaApi.scrollPrev();
  const events = [
    {
      title: "AR Rahman Concert for Peace",
      images: [
        "https://media.insider.in/image/upload/c_crop,g_custom/v1673065185/rxj4gti5sbb7lciqu5nb.jpg",
      ],
    },
    {
      title: "B Praak Live",
      images: [
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1702288015%2Fdhlkrsbpopg5cfpnz23n.jpg",
      ],
    },
  ];
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6 mt-12">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2">
            <Flame className="text-primary" />
            <h2 className="text-lg font-semibold text-content uppercase">
              Event Spotlight
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={slidePrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={slideNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 w-full min-w-0 flex flex-col lg:flex-row gap-6 text-content"
              >
                <div className="w-full lg:w-8/12">
                  <Image
                    width={480}
                    height={360}
                    src={event.images[0]}
                    className="w-full h-full object-cover rounded-md"
                    alt="Event Spotlight"
                  />
                </div>
                <div className="w-full lg:w-4/12 border p-6 rounded-lg bg-white">
                  <h1 className="text-xl font-semibold line-clamp-1">{event.title}</h1>
                  <div className="mt-4 flex items-center ">
                    <div className="bg-secondary rounded-lg p-3 inline-block">
                      <CalendarDays className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="ml-4 font-medium line-clamp-1">
                        1 March, 2024 - 3 March, 2024
                      </span>
                      <span className="text-sm ml-4 line-clamp-1">Monday, 3:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center ">
                    <div className="bg-secondary rounded-lg p-3 inline-block">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="ml-4 font-medium line-clamp-1">
                        ACA Stadium, Barsapara
                      </span>
                      <span className="text-sm ml-4 line-clamp-1">
                        ENTRY - Starts From Rs 200
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:block line-clamp-6 lg:line-clamp-3 xl:line-clamp-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit, mollitia? Maiores, blanditiis nulla. Ducimus, ex
                    placeat? Quam consequatur voluptates provident quae, Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
                    mollitia? Maiores, blanditiis nulla. Lorem ipsum, dolor sit
                    amet consectetur numquam vel commodi...
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer font-normal"
                    >
                      Music
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer font-normal"
                    >
                      Cultural
                    </Badge>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Button>VIEW DETAILS</Button>
                    <Button variant="outline">
                      <Bookmark className="w-3 mr-1" />
                      <span>INTERESTED</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Spotlight;
