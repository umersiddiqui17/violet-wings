import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function StripeSuccess() {
  return (
    <div className=" h-screen">
       <div className=" mt-32 md:max-w-[80vw] mx-auto">
        <CheckCheck className=" w-16 h-16 text-green-600 mx-auto my-6"/>
          <div className=" text-center">
             <h3 className=" text-primary md:text-2xl md:font-bold text-base text-center">Payment Done</h3>
             <p className=" text-gray-500 md:font-semibold text-base">Hope you enjoy your products</p>
             <p className="text-gray-500 text-base">Have a great day</p>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <Button>
                <Link href="/">Go Back</Link>
            </Button>
          </div>

       </div>
    </div>
  )
}
