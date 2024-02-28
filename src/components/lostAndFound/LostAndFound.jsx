import { FolderSearch } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Image from "next/image";

const LostAndFound = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 text-content mt-12">
      <div className="flex gap-2 items-center">
        <FolderSearch className="text-primary" />
        <h2 className="text-lg font-semibold text-content uppercase">
          Lost & Found
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-6">
        <Card className="text-content">
          <CardHeader className="flex flex-row ">
            <div className="flex flex-1 gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="font-medium">Jenny Wilson</div>
                <div className="text-xs">Sun, 24 Nov 2023 - 4:45 PM</div>
              </div>
            </div>
            <div>
              <Badge variant="success">Found</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">Found an Apple Mobile</div>
            <div className="font-medium text-sm opacity-80">
              I have found a black apple mobile near the stage
            </div>
            <div className="flex mt-2 gap-2">
              <Image
                className="w-20 h-20 rounded object-cover border"
                alt=""
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKm3pi311sa6lxAsjnRr1BIvAnYWBamz4xA&usqp=CAU"
              />
              <Image
                className="w-20 h-20 rounded object-cover border"
                alt=""
                width={100}
                height={100}
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fiphone-15-pro-max-hands-on-review-1.jpg?cbr=1&q=90"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="text-content">
          <CardHeader className="flex flex-row ">
            <div className="flex flex-1 gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="font-medium">Jenny Wilson</div>
                <div className="text-xs">Sun, 24 Nov 2023 - 4:45 PM</div>
              </div>
            </div>
            <div>
              <Badge>Lost</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">Office I-Card</div>
            <div className="font-medium text-sm opacity-80">
              Lost my office I-Card somewhere in the event
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LostAndFound;
