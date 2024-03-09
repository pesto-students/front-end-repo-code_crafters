"use client";

import clsx from "clsx";
import {
  FolderSearch,
  ListChecks,
  ListCollapse,
  Map,
  PenLine,
  Siren,
} from "lucide-react";
import React, { useState } from "react";
import Agenda from "../agenda/Agenda";
import EmergencyInfo from "../emergencyInfo/EmergencyInfo";
import "./style.css";
import Instructions from "../instructions/Instructions";
import LostAndFound from "../lostAndFound/LostAndFound";
import EventMap from "../eventMap/EventMap";
import EventOverview from "../eventOverview/EventOverview";

const tabs = [
  { title: "Overview", icon: <ListChecks className=" w-4" /> },
  { title: "Itinerary", icon: <ListChecks className=" w-4" /> },
  { title: "Event Map", icon: <Map className=" w-4" /> },
  {
    title: "Lost & Found",
    icon: <FolderSearch className=" w-4" />,
  },
  { title: "Reviews", icon: <PenLine className=" w-4" /> },
  {
    title: "Instructions",
    icon: <ListCollapse className=" w-4" />,
  },
  { title: "Emergency", icon: <Siren className=" w-4" /> },
];

const ExploreEventTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <nav className="w-full fixed bg-[#F7F8FA] backdrop-filter backdrop-blur-md bg-opacity-70">
        <div className="max-w-screen-xl mx-auto p-4 text-sm font-medium text-center text-content">
          <ul className="flex flex-wrap gap-6">
            {tabs.map((item, i) => (
              <li key={i} className="" onClick={() => setActiveTab(item.title)}>
                <button
                  className={clsx("px-0 py-2 flex items-center gap-1", {
                    "text-primary": activeTab === item.title,
                    "opacity-70": activeTab !== item.title,
                  })}
                  aria-current="page"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <section className="min-h-screen pt-10">
        <div
          className={clsx("tab-content", { hidden: activeTab !== "Overview" })}
        >
          <EventOverview />
        </div>
        <div
          className={clsx("tab-content", { hidden: activeTab !== "Itinerary" })}
        >
          <Agenda />
        </div>
        <div
          className={clsx("tab-content", { hidden: activeTab !== "Event Map" })}
        >
          <EventMap />
        </div>
        <div
          className={clsx("tab-content", { hidden: activeTab !== "Emergency" })}
        >
          <EmergencyInfo />
        </div>
        <div
          className={clsx("tab-content", {
            hidden: activeTab !== "Instructions",
          })}
        >
          <Instructions />
        </div>
        <div
          className={clsx("tab-content", {
            hidden: activeTab !== "Lost & Found",
          })}
        >
          <LostAndFound />
        </div>
      </section>
    </>
  );
};

export default ExploreEventTabs;
