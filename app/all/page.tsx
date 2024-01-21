import React from 'react'
import { client } from '../lib/sanity'
import { simplifiedproduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
    const querry =`*[_type == "product"]{
        _id,
          name,
          "slug":slug.current,
          "imageUrl":images[0].asset->url,
          "categoryName":category -> name,
          price,
        
      }`
      const data =await client.fetch(querry)

      return data;
    }
 
 export default async function page() {
  
    const data:simplifiedproduct[] =await getData()
   return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className=" flex justify-between items-center">
      <h2 className=" text-2xl font-bold tracking-tight text-primary ">
        Our Newest Product
      </h2>
      
    </div>
    <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {data.map((item, index) => (
        <div key={index} className="group relative mx-2">
          <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75">
            <Image
              src={item.imageUrl}
              alt="product image"
              width={300}
              height={300}
              className=" w-full h-full object-cover object-center "
            />
          </div>
          <div className=" flex justify-between mt-4">
            <div className=" text-sm text-gray-500 lg:text-md">
              <Link href={`/product/${item.slug}`} passHref className="font-bold hover:text-primary">{item.name}</Link>
              <p className=" text-sm text-gray-600">{item.categoryName}</p>
            </div>
            
              <p className=" text-sm font-medium text-gray-600 hover:text-primary">₨{item.price}</p>
            

          </div>
        </div>
      ))}
    </div>
  </div>
)
}
    
