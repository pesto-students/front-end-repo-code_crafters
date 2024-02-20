import Agenda from "@/components/agenda/Agenda";
import Instructions from "@/components/instructions/Instructions";
import Sponsors from "@/components/sponsors/Sponsors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightSquare,
  Bookmark,
  CalendarDays,
  Facebook,
  Info,
  Instagram,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function EventDetails() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 mt-12">
        <div className="w-full flex flex-col lg:flex-row gap-6 text-content">
          <div className="w-full lg:w-8/12">
            <Image
              width={480}
              height={360}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1702288015%2Fdhlkrsbpopg5cfpnz23n.jpg"
              className="w-full object-cover rounded-md"
              alt="Event Spotlight"
            />

            <div class="border-b mt-12 pb-2">
              <div className="flex gap-2 items-center">
                <Info className="text-primary" />
                <h2 className="text-lg font-semibold text-content uppercase">
                  About
                </h2>
              </div>
            </div>
            <p className="mt-6">
              Simba Uproar is back for its highly anticipated second season of
              the country’s wildest experience. After a thrilling debut season,
              Simba Uproar 2.0 promises to be bigger, bolder, and more
              captivating than ever before, as it expands to six vibrant cities
              across India.
            </p>
            <p className="mt-4">
              Mumbai, Delhi, Bengaluru, Pune, Guwahati and Panchkula - Simba
              Uproar 2.0 aims to unite music enthusiasts from all corners of the
              country for an unparalleled celebration of music and culture. The
              second season of Simba Uproar is set to take the country by storm,
              with a line-up of stellar performances by upcoming hip-hop
              artists, electrifying music acts, along with immersive
              experiences, including interactive installations, special
              performances, creating an atmosphere of fun and excitement. Join
              Simba Uproar’s #THEWILDTRIBE & roar harder, Together!
            </p>
          </div>
          <div className="w-full lg:w-4/12 ">
            <div className="border shadow-sm p-6 rounded-lg bg-white">
              <h1 className="text-xl font-semibold line-clamp-1">
                B Praak Live
              </h1>
              <div className="mt-4 flex items-center ">
                <div className="bg-secondary rounded-lg p-3 inline-block">
                  <CalendarDays className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-4 font-medium line-clamp-1">
                    1 March, 2024 - 3 March, 2024
                  </span>
                  <span className="text-sm ml-4 line-clamp-1">
                    Monday, 3:00 PM
                  </span>
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
              <div className="mt-4 flex gap-2">
                <Badge variant="outline" className="cursor-pointer font-normal">
                  Music
                </Badge>
                <Badge variant="outline" className="cursor-pointer font-normal">
                  Cultural
                </Badge>
              </div>
              <div className="mt-4 flex gap-4">
                <Button>
                  <ArrowUpRightSquare className="w-4 mr-1 rotate-45" />
                  <span>DIRECTION</span>
                </Button>
                <Button variant="outline">
                  <Bookmark className="w-4 mr-1" />
                  <span>INTERESTED</span>
                </Button>
              </div>
            </div>
            <div className="border shadow-sm p-6 rounded-lg bg-white mt-6">
              <h1 className="font-semibold line-clamp-1">
                Invite your friends
              </h1>
              <p className="text-sm">and enjoy a shared experience</p>
              <div className="border-b mt-1"></div>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-secondary rounded-lg p-3 inline-block">
                  <Facebook className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary rounded-lg p-3 inline-block">
                  <Twitter className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary rounded-lg p-3 inline-block">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sponsors />
      <Instructions />
      <Agenda />
    </>
  );
}