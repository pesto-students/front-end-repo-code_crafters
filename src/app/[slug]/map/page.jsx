"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-content {
    padding: 0;
    border-radius: 10px;
    font-family: Roboto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 180px;
  }
  .mapboxgl-popup-close-button {
    right: 5px;
    padding: 3px;
    font-size: 18px;
    color: gray;
    background: none;
    outline: none;
  }
`;

const EventMap = () => {
  const [viewState, setViewState] = useState({
    longitude: 91.77634,
    latitude: 26.184169,
    zoom: 18,
  });
  const [pins] = useState([
    {
      id: 1,
      longitude: 91.776533,
      latitude: 26.183812,
      title: "Car parking",
      desc: "Car parking for the visitors & guests",
      img: "",
    },
    {
      id: 2,
      longitude: 91.776103,
      latitude: 26.183892,
      title: "Main Gate",
      desc: "Main entrance of the event",
      img: "https://fastly.4sqi.net/img/general/600x600/6625889_dxoweN4qQ24hEEfQ8xgfY2CtYKjLv6dt7tofn9Evc8w.jpg",
    },
    {
      id: 3,
      longitude: 91.776033,
      latitude: 26.183999,
      title: "Car parking",
      desc: "Car parking for the visitors & guests",
      img: "",
    },
  ]);

  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  return (
    <section className="max-w-screen-xl mx-auto p-4 text-content mt-12">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 overflow-hidden h-[500px] relative">
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
            attributionControl={false}
            transitionDuration="200"
            onViewportChange={(viewState) => setViewState(viewState)}
          >
            {pins.map((item, i) => (
              <>
                <Marker
                  key={i}
                  longitude={item.longitude}
                  latitude={item.latitude}
                >
                  <button
                    onClick={() => handleMarkerClick(item.id)}
                    className="bg-primary w-6 h-6 rounded-full text-white shadow text-[10px] flex items-center justify-center"
                  >
                    {i + 1}
                  </button>
                </Marker>

                {item.id === currentPlaceId && (
                  <StyledPopup
                    key={i}
                    longitude={item.longitude}
                    latitude={item.latitude}
                    anchor="bottom"
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPlaceId(null)}
                  >
                    {item.img && (
                      <Image
                        className="w-full rounded-t-[10px] border"
                        alt=""
                        width={200}
                        height={200}
                        src={item.img}
                      />
                    )}
                    <div className="p-3 text-content">
                      <div className="font-bold">{item.title}</div>
                      <div>{item.desc}</div>
                    </div>
                  </StyledPopup>
                )}
              </>
            ))}

            <NavigationControl position="bottom-right" />
          </Map>
        </div>
        <div className="col-span-1 h-[500px]">
          <Card className="text-content h-full">
            <Tabs defaultValue="account" className="w-full">
              <CardHeader className="flex flex-row">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Amenities</TabsTrigger>
                  <TabsTrigger value="password">Shops & Stores</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                <TabsContent value="account">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex gap-3 cursor-pointer bg-gray-50 p-2 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm"> Car Parking</span>
                        </div>
                        <div className="font-medium text-xs opacity-80 mt-1">
                          Car parking for the visitors & guests
                        </div>
                      </div>
                      <div className="w-10">
                        <Image
                          className="w-10 h-10 rounded object-cover border"
                          alt=""
                          width={100}
                          height={100}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKm3pi311sa6lxAsjnRr1BIvAnYWBamz4xA&usqp=CAU"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 cursor-pointer bg-gray-50 p-2 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm"> Main Gate</span>
                        </div>
                        <div className="font-medium text-xs opacity-80 mt-1">
                          Main entrance of the event
                        </div>
                      </div>
                      <div className="w-10">
                        <Image
                          className="w-10 h-10 rounded object-cover border"
                          alt=""
                          width={100}
                          height={100}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKm3pi311sa6lxAsjnRr1BIvAnYWBamz4xA&usqp=CAU"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  No stores information available here!
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventMap;
