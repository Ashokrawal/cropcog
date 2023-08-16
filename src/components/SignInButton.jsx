"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex ml-auto gap-4">
        <p className="text-sky-500">{session.user.name}</p>
        <button className="text-red-500" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div>
      <button className="text-green-700 ml-auto" onClick={() => signIn()}>
        SignIn
      </button>
    </div>
  );
};

export default SignInButton;
