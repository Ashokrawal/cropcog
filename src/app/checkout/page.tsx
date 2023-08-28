import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";
import { prisma } from "../../lib/db/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

async function saveShippingAddress(formData: FormData) {
  "use server";

  const email = formData.get("email")?.toString();
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const address = formData.get("address")?.toString();
  const apartment = formData.get("apartment")?.toString();
  const city = formData.get("city")?.toString();
  const state = formData.get("state")?.toString();
  const postalCode = Number(formData.get("postalCode") || 0);
  const phone = Number(formData.get("phone") || 0);

  if (
    !email ||
    !firstName ||
    !lastName ||
    !address ||
    !city ||
    !state ||
    !postalCode ||
    !phone
  ) {
    throw new Error("Missing Required Fields");
  }

  const result = await prisma.shippingDetail.create({
    data: {
      email,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      postalCode,
      phone,
    },
  });
  console.log(NextResponse.json(result));
  redirect("/shipping");
}

const CheckoutPage = () => {
  return (
    <div className="h-auto px-4 xl:px-20 w-full mb-10">
      <div className="flex items-center text-base md:text-lg justify-center md:gap-1 py-6">
        <span className="text-gray-600">Cart</span>
        <AiOutlineRight />
        <span className="font-extrabold">Information</span>
        <AiOutlineRight />
        <span className="text-gray-600">Shipping</span>
        <AiOutlineRight />
        <span className="text-gray-600">Payment</span>
      </div>
      <form
        action={saveShippingAddress}
        className="md:px-40 lg:px-64 sm:px-10 xl:px-86 xxl:px-96 sm:gap-3 gap-2 flex flex-col"
      >
        <p className="font-extrabold">Contact</p>
        <input
          className="input w-full"
          type="email"
          name="email"
          id="email"
          required={true}
          placeholder="Email"
        />
        <h1 className="font-medium">Shipping Address</h1>
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            id="firstName"
            className="input w-full sm:w-1/2"
            type="text"
            required
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <input
          name="address"
          className="input w-full"
          type="text"
          id="address"
          placeholder="Address"
        />
        <input
          className="input w-full"
          type="text"
          id="apartment"
          name="apartment"
          placeholder="Apartment, suite, etc (optional)"
        />
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            className="input w-full  sm:w-1/2"
            type="text"
            required
            id="city"
            name="city"
            placeholder="City"
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            id="state"
            required
            name="state"
            placeholder="State"
          />
          <input
            className="input w-full sm:w-1/2"
            type="number"
            id="postalCode"
            required
            name="postalCode"
            placeholder="Postal Code"
          />
        </div>
        <input
          required
          className="input w-full"
          type="number"
          placeholder="Phone"
          name="phone"
          id="phone"
        />

        <button
          type="submit"
          className="bg-green-800 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4"
        >
          Proceed To Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
