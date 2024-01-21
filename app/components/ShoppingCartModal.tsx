"use client";
import { useShoppingCart } from "use-shopping-cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    decrementItem,
    incrementItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();
  
  // checkout

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result")
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className=" h-full flex flex-col justify-between">
          <div className=" mt-8 flex-1 overflow-y-auto">
            <ul className=" -my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className=" font-normal py-6">You dont have any items </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li className=" flex py-6" key={entry.id}>
                      <div className=" h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product Image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" flex flex-1 flex-col ml-4">
                        <div>
                          <div className=" flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>Rs{entry.price}</p>
                          </div>
                          <p className=" line-clamp-2 text-gray-500 text-sm">
                            {entry.description}
                          </p>
                        </div>
                        <div className=" flex justify-between  text-sm">
                          <button onClick={() => decrementItem(entry.id)}>
                            <AiFillMinusCircle className=" my-auto items-center" />
                          </button>
                          <p>{entry.quantity} </p>
                          <button onClick={() => incrementItem(entry.id)}>
                            <AiFillPlusCircle className=" my-auto items-center" />
                          </button>
                          <button
                            onClick={() => removeItem(entry.id)}
                            type="button"
                            className=" pr-9 font-medium text-primary hover:text-primary/80"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className=" border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className=" flex justify-between text-base text-gray-900 font-medium">
              <p>Subtotal:</p>
              <p>Rs{totalPrice}</p>
            </div>
            <p className=" mt-0.5 text-sm text-gray-600">
              Shipping and Taxes are calculated at checkout
            </p>
            <div className="mt-6">
              <Button onClick={handleCheckoutClick} className=" w-full">Checkout</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
function useShoppingcart() {
  throw new Error("Function not implemented.");
}
