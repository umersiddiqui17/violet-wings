import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client =createClient({
    projectId:"agge7ang",
    dataset:"production",
    apiVersion:"2022-03-25",
    useCdn: true
})
// 2021-03-25 2022-03-25
const builder =ImageUrlBuilder(client)

export function urlFor(source:any){
    
    return builder.image(source)
}

// this file helps fetching the data from sanity studio

// it states that image urlbuilder is an method that use sanityclient to connect and we pass the client to give information about the client in which it is going to be connected to and the function urlFor takes the image and if the image is from sanity it will make a url for that image


  