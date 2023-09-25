import { NextResponse } from "next/server";
import ShippingModel from "../../../models/shippingDetails";
import connectMongoose from "../../../lib/mongodb";

export async function POST(request) {
  const {
    email,
    firstName,
    lastName,
    state,
    city,
    postalCode,
    phone,
    address,
    apartment,
  } = await request.json();
  await connectMongoose();
  await ShippingModel.create({
    email,
    firstName,
    lastName,
    state,
    city,
    postalCode,
    phone,
    address,
    apartment,
  });
  return NextResponse.json({ message: "Success", status: 201 });
}

export async function DELETE(request) {
  const { id } = request.nextUrl.searchParams.get("id");
  await connectMongoose();
  await ShippingModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Successfully Deleted", status: 200 });
}

export async function GET() {
  await connectMongoose();
  const CurrentShippingDetails = await ShippingModel.findOne();
  return NextResponse.json({ CurrentShippingDetails }, { status: 200 });
}
