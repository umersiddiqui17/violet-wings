
import AddToBag from "@/app/components/AddToBag";
import Checkout from "@/app/components/CheckOutNow";
import ImageGallery from "@/app/components/imageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { AiFillStar } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";


async function getData(slug: string) {
  const querry = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          name,
          images,
          price,
          "slug":slug.current,
          description,
          "categoryName":category ->name,
          price_id,
          
      }`;

  const data = await client.fetch(querry);
  return data;
}


export default async function Productpage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

 
  

  return (
    <div>
      <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
        <div className=" grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className=" md:py-8">
            <div className=" mb-2 md:mb-3">
              <span className="  text-gray-500 inline">
                {data.categoryName}
              </span>
            </div>
            <div className="flex flex-col">
              <h2 className=" text-2xl text-primary inline font-bold">
                {data.name}
              </h2>
            </div>
            <div className="flex items-center md:mb-10">
              <button className="text-white bg-primary p-3 m-2 flex items-center rounded-full">
                <span className="mr-1">4.7</span>
                <AiFillStar className="h-5 w-5" />
              </button>
              <span className="text-gray-500">78 Rating</span>
            </div>
            <div className=" flex items-end ">
              <span className=" font-bold text-xl ">Rs:</span>
              <span className=" text-lg ml-2 text-primary underline font-bold">
                {data.price}
              </span>
            </div>
            <div className=" mt-2 flex items-center">
              <MdLocalShipping className=" text-gray-500 text-2xl" />
              <span className=" ml-2 text-gray-500">2-4 days Shipping</span>
            </div>
            <div className=" flex gap-2.5 mt-5">
              <AddToBag
                currency="PKR"
                description={data.description}
                name={data.name}
                price={data.price}
                image={data.images[0]}
                key={data._id}
                price_id={data.price_id}
              />
              <Checkout
              currency="PKR"
              description={data.description}
              name={data.name}
              price={data.price}
              image={data.images[0]}
              key={data._id}
              price_id={data.price_id}
              />

            </div>
            <p className=" text-base text-gray-500 tracking-wide mt-4">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
