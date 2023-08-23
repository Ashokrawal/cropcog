"use client";
import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <TailSpin />
    </div>
  );
};

export default Loading;
