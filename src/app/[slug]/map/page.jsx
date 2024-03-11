"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import Map from "react-map-gl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EventMap = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 text-content mt-12">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
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
