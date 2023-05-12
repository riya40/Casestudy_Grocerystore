import React from "react";
import RegistrationForm from "../Components/UserRegistration";
import LoginForm from "../Components/LoginComponents";
import HomePage from "../Components/HomePage";


export default function bottom() {
  return (
      <>
          <RegistrationForm />
          <LoginForm />
          <HomePage/>
      </>
    )
  }


