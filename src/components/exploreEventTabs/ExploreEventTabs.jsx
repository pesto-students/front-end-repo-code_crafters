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

const tabs = [
  { title: "Itinerary", icon: <ListChecks className="text-primary w-4" /> },
  { title: "Event Map", icon: <Map className="text-primary w-4" /> },
  {
    title: "Lost & Found",
    icon: <FolderSearch className="text-primary w-4" />,
  },
  { title: "Reviews", icon: <PenLine className="text-primary w-4" /> },
  {
    title: "Instructions",
    icon: <ListCollapse className="text-primary w-4" />,
  },
  { title: "Emergency", icon: <Siren className="text-primary w-4" /> },
];

const ExploreEventTabs = () => {
  const [activeTab, setActiveTab] = useState("Itinerary");
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 mt-12">
        <div className="text-sm font-medium text-center text-content border-b mt-6">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((item, i) => (
              <li
                key={i}
                className="me-2"
                onClick={() => setActiveTab(item.title)}
              >
                <button
                  className={clsx(
                    "p-4 border-b-2 rounded-t-lg flex items-center gap-1",
                    {
                      "border-content": activeTab === item.title,
                      "opacity-70": activeTab !== item.title,
                    }
                  )}
                  aria-current="page"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div
        className={clsx("tab-content", { hidden: activeTab !== "Itinerary" })}
      >
        <Agenda />
      </div>
      <div
        className={clsx("tab-content", { hidden: activeTab !== "Emergency" })}
      >
        <EmergencyInfo />
      </div>
      <div
        className={clsx("tab-content", { hidden: activeTab !== "Instructions" })}
      >
        <Instructions />
      </div>
      <div
        className={clsx("tab-content", { hidden: activeTab !== "Lost & Found" })}
      >
        <LostAndFound />
      </div>
    </>
  );
};

export default ExploreEventTabs;
