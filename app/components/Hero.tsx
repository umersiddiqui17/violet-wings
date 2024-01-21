import Image from "next/image";
import React from "react";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getdata() {
  
  const querry = `*[_type =='heroImage'][0]`;
  const data = await client.fetch(querry);
  return data;
}
const Hero = async () => {
  const data = await getdata();
  return (
    <section className=" max-w-2xl ">
      <div className=" flex">
      <div className=" ml-9 flex flex-col justify-centre mt-72 max-w-full lg:w-1/2">
        <h1 className=" font-bold text-2xl text-primary sm:text-3xl md:text-4xl ">
          Top Fashion For A Top Price!
        </h1>
        <p className=" mt-5 leading-relaxed max-w-md font-normal text-black">
          We sell the most exclusive and high quality clothes. So come shop with
          us
        </p>
      </div>
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className=" relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <Image
            src={urlFor(data.image1).url() }
            alt=""
            className=" h-full w-full object-cover object-center"
            width={500}
            height={500}
            priority
          />
          
        </div>
        <div className=" overflow-hidden bg-gray-100 rounded-lg shadow-lg">
          <Image
          className=" h-full w-full object-cover object-center"
          src={urlFor(data.image2).url()}
          alt=""
          width={500}
          height={500}
          priority/>

        </div>
      </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 md:flex-row">
          <div className=" ml-10  mt-20 mb-11 flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <Link href={'/Men'} className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200">
              Men
            </Link>
            <Link href={'/Women'} className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200">
              Women
            </Link>
            <Link href={'/Teen'} className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200">
              Teen
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Hero;

// lg:w-1/3 sets the text that way
