import React from "react";

const fetchData = async () => {
  try {
    const res = fetch(`http://localhost:3001/api/shippingDetails`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed Fetching shipping details from DB");
    }
    return (await res).json();
  } catch (error) {
    console.log(error);
  }
};

const Shipping = async () => {
  return (
    <div>
      <div className="card md:px-30 lg:px-40 sm:px-10 xl:px-86 xxl:px-96 flex flex-col">
        <div className="top-section p-4 rounded-t-lg w-full border-2  border-gray-400 border-solid">
          <div className="flex items-center justify-between">
            <span>Contact</span>
            <button className="underline text-gray-500">Change</button>
          </div>
          <br />
          <div>
            <p className="text-gray-500">Name</p>
            <p className="text-gray-500">Email</p>
          </div>
        </div>
        <div className="top-section p-4 rounded-b-lg w-full border-2 border-t-0  border-gray-400 border-solid">
          <div className="flex items-center justify-between">
            <span>Information</span>
            <button className="underline text-gray-500">Change</button>
          </div>
          <br />
          <div>
            <p className="text-gray-500">Address</p>
            <p className="text-gray-500">Mobile Number</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Shipping Method</p>

          <div className="flex items-center mt-2 mb-4 justify-between w-full border-2 p-3 rounded-lg  border-gray-400 border-solid">
            <p>Shipping type</p>
            <p>FREE</p>
          </div>
          <button className="bg-green-800 mt-2 font-black hover:bg-green-600 rounded-md text-white md:px-8 px-6 md:py-4  sm:w-fit w-full py-4">
            Continue To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
