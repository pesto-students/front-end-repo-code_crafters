import EventsThisWeek from "@/components/eventsThisWeek/EventsThisWeek";
import PopularCities from "@/components/popularCities/PopularCities";
import RecentEvents from "@/components/recentEvents/RecentEvents";
import Spotlight from "@/components/spotlight/Spotlight";
import TagList from "@/components/tagList/TagList";
import UpcomingEvents from "@/components/upcomingEvents/UpcomingEvents";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <Spotlight />
      <section className="max-w-screen-xl mx-auto p-4 text-content mt-12 lg:hidden">
        <form class="w-full">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-5 opacity-50"/>
            </div>
            <input
              type="search"
              class="block w-full p-4 ps-10 text-sm border rounded-lg bg-white outline-none focus:border-primary"
              placeholder="Search events, Location..."
              required
            />
          </div>
        </form>
      </section>
      <TagList />

      <UpcomingEvents />
      <RecentEvents />
      <PopularCities />
      <EventsThisWeek />
    </>
  );
}
