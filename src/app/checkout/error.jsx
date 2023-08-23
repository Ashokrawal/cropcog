"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Oops! something went wrong!</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;
