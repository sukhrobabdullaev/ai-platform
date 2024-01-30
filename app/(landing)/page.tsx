import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      LandingPage (unprotected)
      <SignUpButton>
        <Button variant="ghost">SignUp</Button>
      </SignUpButton>
      <SignInButton>
        <Button variant="destructive">SignIn</Button>
      </SignInButton>
    </div>
  );
};

export default LandingPage;
