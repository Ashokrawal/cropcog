import { NextResponse } from "next/server";
import ShippingModel from "../../../../models/shippingDetails";
import connectMongoose from "../../../../lib/mongodb";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newEmail,
    newFirstName,
    newLastName,
    newState,
    newCity,
    newPhone,
    newPostalCode,
    newAddress,
    newApartment,
  } = await request.json();
  await connectMongoose();

  try {
    const updatedShippingDetails = await ShippingModel.findByIdAndUpdate(
      id,
      {
        email: newEmail,
        firstName: newFirstName,
        lastName: newLastName,
        state: newState,
        city: newCity,
        phone: newPhone,
        postalCode: newPostalCode,
        address: newAddress,
        apartment: newApartment,
      },
      {
        new: true,
      }
    );
    if (!updatedShippingDetails) {
      return NextResponse.json({ message: "Comment not found", status: 404 });
    }
    return NextResponse.json({
      message: "Successfully Updated",
      status: 200,
      updatedComment,
    });

    return NextResponse.json({ message: "Successfully Updated", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error updating comment",
      status: 500,
    });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoose();
  const getShippingDetails = await ShippingModel.findOne({ _id: id });
  return NextResponse.json({ getShippingDetails }, { status: 200 });
}
