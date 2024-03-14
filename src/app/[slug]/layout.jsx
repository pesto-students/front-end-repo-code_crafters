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
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    title: "Overview",
    path: "overview",
    icon: <ListChecks className=" w-4" />,
  },
  {
    title: "Itinerary",
    path: "itinerary",
    icon: <ListChecks className=" w-4" />,
  },
  { title: "Event Map", path: "map", icon: <Map className=" w-4" /> },
  {
    title: "Instructions",
    path: "instructions",
    icon: <ListCollapse className=" w-4" />,
  },
  { title: "Emergency", path: "emergency", icon: <Siren className=" w-4" /> },
  {
    title: "Lost & Found",
    path: "lost-found",
    icon: <FolderSearch className=" w-4" />,
  },
  { title: "Reviews", path: "reviews", icon: <PenLine className=" w-4" /> },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const displayNav = pathname.split("/").length > 2;

  return (
    <>
      {displayNav && (
        <nav className="hidden lg:block w-full fixed bg-white z-20">
          <div className="max-w-screen-xl mx-auto p-4 text-center text-content">
            <ul className="flex flex-wrap gap-6">
              {tabs.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className={clsx("px-0 py-2 flex items-center gap-1", {
                      "text-primary": pathname.includes(item.path),
                      "opacity-80": !pathname.includes(item.path),
                    })}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <section className={clsx("min-h-[400px]", displayNav ? "pt-12" : "")}>
        {children}
      </section>
    </>
  );
}
