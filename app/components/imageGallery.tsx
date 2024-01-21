"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppprops {
  images: any;
}
export default function ImageGallery({ images }: iAppprops) {
  const [Bigimage, setBigimage] = useState(images[0]);
  const handlesmallimages = (image: any) => {
    setBigimage(image);
  };
  return (
    <div className=" grid gap-4 lg:grid-cols-5">
      <div className=" order-last flex gap-4 lg:order-none lg: flex-col">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="mt-6 overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              alt=""
              width={200}
              height={200}
              onMouseEnter={() => handlesmallimages(image)}
              className=" h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className=" ml-7 mt-7 relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(Bigimage).url()}
          alt=""
          width={500}
          height={200}
          className=" h-full w-full object-cover object-center "
        />
        
      </div>
    </div>
  );
}
