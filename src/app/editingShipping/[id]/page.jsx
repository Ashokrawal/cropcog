import React from "react";
import EditShippingForm from "../../../components/EditShippingForm";
import { last } from "lodash";

const handleEdit = async (id) => {};

const EditShipping = async ({ params }) => {
  const { id } = params;
  const { getShippingDetails } = await handleEdit(id);
  const {
    email,
    phone,
    state,
    city,
    address,
    firstName,
    lastName,
    postalCode,
    apartment,
  } = getShippingDetails;

  console.log(id);

  return (
    <div>
      <EditShippingForm
        id={id}
        city={city}
        state={state}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        postalCode={postalCode}
        apartment={apartment}
        address={address}
      />
    </div>
  );
};

export default EditShipping;
