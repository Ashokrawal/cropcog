import React from "react";
import { useState } from "react";

const EditShippingForm = ({
  email,
  firstName,
  lastName,
  phone,
  postalCode,
  state,
  city,
  apartment,
  address,
}) => {
  const [newEmail, setNewEmail] = useState(email);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhone, setNewPhone] = useState(phone);
  const [newState, setNewState] = useState(state);
  const [newCity, setNewCity] = useState(city);
  const [newApartment, setNewApartment] = useState(apartment);
  const [newAddress, setNewAddress] = useState(address);
  const [newPostalCode, setNewPostalCode] = useState(postalCode);

  const handleSubmit = async (e) => {};

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="md:px-40 lg:px-64 sm:px-10 xl:px-86 xxl:px-96 sm:gap-3 gap-2 flex flex-col"
      >
        <p className="font-extrabold">Contact</p>
        <input
          className="input w-full"
          // type="email"
          name="email"
          id="email"
          required={true}
          value={email}
          placeholder="Email"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <h1 className="font-medium">Shipping Address</h1>
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            id="firstName"
            className="input w-full sm:w-1/2"
            type="text"
            value={firstName}
            required
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            required
            value={lastName}
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>

        <input
          name="address"
          className="input w-full"
          type="text"
          value={address}
          id="address"
          placeholder="Address"
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <input
          className="input w-full"
          type="text"
          id="apartment"
          value={apartment}
          required
          name="apartment"
          placeholder="Apartment, suite, etc"
          onChange={(e) => setNewApartment(e.target.value)}
        />
        <div className="flex items-center sm:flex-row flex-col justify-start sm:justify-between gap-2">
          <input
            className="input w-full  sm:w-1/2"
            type="text"
            required
            id="city"
            value={city}
            name="city"
            placeholder="City"
            onChange={(e) => setNewCity(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="text"
            id="state"
            value={state}
            required
            name="state"
            placeholder="State"
            onChange={(e) => setNewState(e.target.value)}
          />
          <input
            className="input w-full sm:w-1/2"
            type="number"
            id="postalCode"
            required
            value={postalCode}
            name="postalCode"
            placeholder="Postal Code"
            onChange={(e) => setNewPostalCode(e.target.value)}
          />
        </div>
        <input
          required
          className="input w-full"
          type="number"
          placeholder="Phone"
          value={phone}
          name="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
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

export default EditShippingForm;
